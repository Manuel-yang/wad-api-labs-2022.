import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies/index.js';
import router4genres from './api/genres/router4genres'
import usersRouter from './api/users';
import session from 'express-session';
import authenticate from './authenticate';
import './db';
import './seedData'

dotenv.config();
const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};
const app = express();

const port = process.env.PORT;

app.use(express.json());
// place this after the express.json() line
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));
app.use('/api/movies', authenticate, moviesRouter);
app.use('/api/genres', router4genres)
app.use('/api/users', usersRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});