import database from "../database.js";
export async function getAllCourses(req, res) {
    try {
        const [rows] = await database.query("SELECT * FROM courses");
        res.json(rows);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export async function getCourseById(req, res) {
    try {
        const [rows] = await database.query("SELECT * FROM courses WHERE course_id = ?", [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}