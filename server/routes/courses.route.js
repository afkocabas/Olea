import express from "express";

import { getAllCourses, getCourseById } from "../controllers/courses.controller.js";

const coursesRouter = express.Router();

// TODO: Add request handlers here: 
coursesRouter.get("/", getAllCourses);

coursesRouter.get('/:userID/:id', getCourseById)

export default coursesRouter;