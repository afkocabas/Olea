import database from "../database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// get all users from the database
export async function getAllUsers(req, res) {
    try {
        const [rows] = await database.query("SELECT * FROM users");
        res.json(rows);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function getUserById(req, res) {
    try {
        const [rows] = await database.query("SELECT * FROM users WHERE user_id = ?", [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function getUserByUsername(req, res) {
    try {
        const [rows] = await database.query("SELECT * FROM users WHERE username = ?", [req.params.username]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}


export async function createUser(req, res) {
    try {
        const { username, password } = req.body;

        // check if the username is already taken
        const [rows] = await database.query("SELECT * FROM users WHERE username = ?", [username]);
        if (rows.length > 0) {
            return res.status(400).json({ message: "Username already taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const [result] = await database.query("INSERT INTO users (username, password) VALUES (?, ?)", 
            [username, hashedPassword]);

        // return the new user
        res.status(201).json({ id: result.insertId, ...req.body });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        // check if the username exists
        const [rows] = await database.query("SELECT * FROM users WHERE username = ?", [username]);
        if (rows.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // If the user exists, check if the password is correct
        const user = rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        // If the password is incorrect, return an error
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // If the password is correct, create a JWT token.
        const token = jwt.sign({ id: user.user_id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        // Add the token to the user cookies
        res.cookie("token", token, { 
            maxAge: 3600000, 
            samesite: 'lax' 
        });

        // return the user
        res.status(200).json( { 

            user: { id: user.user_id, username: user.username }, 
            token: token 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

