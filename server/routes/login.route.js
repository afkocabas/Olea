import express from "express";
import jwt from "jsonwebtoken";

import { loginUser } from "../controllers/users.controller.js";

const loginRouter = express.Router();

loginRouter.post("/", loginUser);


export default loginRouter;
