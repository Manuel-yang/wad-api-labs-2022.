import express from 'express';
const router = express.Router(); 
import { genres } from './genresData'

router.get('/', (req, res) => {
  res.json(genres);
});

export default router;
