import express from 'express';
import { enrollUserInCourse, getEnrollmentsForUser, updateProgress } from '../controllers/enrollments.controller.js';

const enrollmentsRouter = express.Router();

// enroll a user in a course
enrollmentsRouter.post('/', enrollUserInCourse);

// get all the enrollments for a user
enrollmentsRouter.get('/:userID', getEnrollmentsForUser)

enrollmentsRouter.post('/updateProgress', updateProgress)

export default enrollmentsRouter;