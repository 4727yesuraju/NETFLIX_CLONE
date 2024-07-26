import express from 'express';
import { authCheck, login, logout, signup } from '../controllers/auth.controller.js';
import { protechRoute } from '../middleware/protechRoute.js';

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello");
})
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.get('/authCheck',protechRoute ,authCheck);

export default router;