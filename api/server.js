import express from 'express';
import {config} from 'dotenv';
config();
import path from 'path';
import cookieParser from 'cookie-parser';

const __dirname = path.resolve();

//routes
import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';
import tvRoutes from './routes/tv.route.js';
import searchRoutes from './routes/search.route.js';

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protechRoute } from './middleware/protechRoute.js';

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()) //allows to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie", protechRoute, movieRoutes);
app.use("/api/v1/tv", protechRoute, tvRoutes);
app.use("/api/v1/search", protechRoute, searchRoutes);

if(ENV_VARS.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname,'/client/dist')));
   app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
   })
}

app.listen(PORT,()=>{
   console.log(`server is created at ${PORT}`);
   connectDB();
})