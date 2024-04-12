import express from "express";

import { getAllCourses } from "../controllers/courses.controller.js";

const coursesRouter = express.Router();

// TODO: Add request handlers here: 
coursesRouter.get("/", getAllCourses);

export default coursesRouter;