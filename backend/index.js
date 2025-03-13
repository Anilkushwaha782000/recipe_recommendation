import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
import connectionDatabase from './dbUtil/ConnectDb.js';
import authRouter from './routes/auth.js';
import mealRouter from './routes/Addmeal.js'
import cors from "cors";
connectionDatabase();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000","https://recipe-recommendation-frontend-41e2.onrender.com"],
      credentials: true,
    })
  );
app.get("/hello",(req,res)=>{
    res.status(200).json({message:"Hello, Anil from backend teams"})
})
app.use("/api/auth",authRouter);
app.use("/api/v1",mealRouter);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}!!`);
})
