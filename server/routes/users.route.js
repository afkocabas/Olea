import database from "../database.js";
import express from "express";

import { getAllUsers, getUserById, getUserByUsername} from "../controllers/users.controller.js";  

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers); 

usersRouter.get("/id/:id", getUserById);

usersRouter.get("/username/:username", getUserByUsername);   


export default usersRouter;
