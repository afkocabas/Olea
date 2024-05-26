import express from 'express';
import { getCommentById, postComment } from '../controllers/comments.controller.js';

const commentsRouter = express.Router();

commentsRouter.get('/:courseID', getCommentById); 

commentsRouter.post('/', postComment);

export default commentsRouter;

