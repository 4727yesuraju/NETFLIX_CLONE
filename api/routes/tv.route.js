import express from 'express';
import { getSimilarTvs, getTrendingTv, getTvByCategory, getTvDetailes, getTvTrailers } from '../controllers/tv.controller.js';

const router = express.Router();


router.get('/trending',getTrendingTv);
router.get('/:id/trailers',getTvTrailers);
router.get('/:id/details',getTvDetailes);
router.get('/:id/similar',getSimilarTvs);
router.get('/:category',getTvByCategory);

export default router;