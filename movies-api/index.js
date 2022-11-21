import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies/index.js';
import router4genres from './api/movies/router4genres'

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/movies', moviesRouter);
app.use('/api/genres', router4genres)

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});