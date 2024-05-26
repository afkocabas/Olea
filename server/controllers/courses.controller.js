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

// For a specific user
export async function getCourseById(req, res) {
    const courseID = req.params.id;
    const userID = req.params.userID;
    try {
        const [rows] = await database.query(
            "SELECT * FROM takes, courses WHERE takes.user_id = ? AND takes.course_id = ? AND takes.course_id = courses.course_id "
            ,[userID, courseID ]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}