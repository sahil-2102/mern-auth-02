import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{console.log("Database connected!")})
.catch((err)=>{console.log(err)});

const app = express();
const port = 3000
app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})