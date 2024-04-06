import database from "../database.js";
import bcrypt from "bcrypt";

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

        // check if the username is already taken
        const [rows] = await database.query("SELECT * FROM users WHERE username = ?", [req.body.username]);
        if (rows.length > 0) {
            return res.status(400).json({ message: "Username already taken" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const [result] = await database.query("INSERT INTO users (username, password) VALUES (?, ?)", 
            [req.body.username, hashedPassword]);

        // return the new user
        res.status(201).json({ id: result.insertId, ...req.body });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function loginUser(req, res) {
    try {
        const [rows] = await database.query("SELECT * FROM users WHERE username = ?", [req.body.username]);
        if (rows.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const user = rows[0];

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
} 

