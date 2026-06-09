import express from 'express'
import cors from 'cors' 
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'  
dotenv.config()

const app = express();
const port = 5001 || process.env.PORT;



app.get('/', (req, res) => {
  res.send('API is running');
});

connectDB().then(()=>{
    
    app.listen(port,()=>{
        console.log("Server is live on port " ,port)
    })
});