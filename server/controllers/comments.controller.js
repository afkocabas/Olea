import database from "../database.js";

export const getCommentById = async (req, res) => {
    try {
        const courseID = req.params.courseID;
        const [rows] = await database.query("SELECT * FROM comments WHERE course_id = ?", [courseID]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No comment found" });
        }
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const postComment = async (req, res) => {
    const comment = req.body.comment;
    console.log(req.body)
    console.log(comment)
    try {
        console.log("call here")
        const { course_id, username, rating,  comment_body } = comment;
        await database.query("INSERT INTO comments (course_id, username, rating, comment_body) VALUES (?, ?, ?, ?)", [course_id, username, rating , comment_body]);
        return res.status(201).json({ message: "Comment posted successfully" });
    } catch (error) {
        console.log('error occured here', error)
        return res.status(500).json({ message: "Internal server error" });
    }
}