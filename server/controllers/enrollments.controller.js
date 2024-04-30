import database from '../database.js'

export const enrollUserInCourse = async (req, res) => {
    const { user_id, course_id } = req.body;

    try {
        const [user] = await database.query('SELECT * FROM users WHERE user_id = ?', [user_id]);

        if (user.length === 0) {
            console.log("user_id is " + user_id)
            console.log("user not found")
            return res.status(404).json({message: 'User not found'});
        }

        const [enrollment] = await database.query('SELECT * FROM takes WHERE user_id = ? AND course_id = ?', [user_id, course_id]);
        if (enrollment.length !== 0) {
            return res.status(409).json({message: 'User is already enrolled in this course.'});
        }

        await database.query('INSERT INTO takes (user_id, course_id) VALUES (?, ?)', [user_id, course_id]);
        res.status(201).json({message: 'User enrolled in course successfully'});
        console.log("User enrolled in course successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal server error'});
    }
};

export const getEnrollmentsForUser = async (req, res) => {
    const { userID } = req.params;

    try {
        const [enrollments] = await database.
        query('SELECT courses.* FROM takes, courses WHERE courses.course_id = takes.course_id AND takes.user_id = ?', [userID]);

        if (enrollments.length === 0) {
            return res.status(404).json({message: 'No enrollments found for this user'});
        }

        res.status(200).json(enrollments);
        console.log(enrollments)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal server error'});
    }
}