import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// import routes 
import usersRouter from './routes/users.route.js';
import registerRouter from './routes/register.route.js';
import loginRouter from './routes/login.route.js';
import coursesRouter from './routes/courses.route.js';
import enrollmentsRouter from './routes/enrollments.route.js';
import commentsRouter from './routes/comments.route.js';

const app = express(); 
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// use routes
app.use('/users', usersRouter);
app.use('/register', registerRouter);   
app.use('/login', loginRouter);
app.use('/courses', coursesRouter);
app.use('/enrollments', enrollmentsRouter);
app.use('/comments', commentsRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
