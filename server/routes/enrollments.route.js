import express from 'express';
import { enrollUserInCourse } from '../controllers/enrollments.controller.js';

const enrollmentsRouter = express.Router();

enrollmentsRouter.post('/', enrollUserInCourse);

export default enrollmentsRouter;