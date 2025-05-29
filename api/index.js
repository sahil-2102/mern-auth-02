import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{console.log("Database connected!")})
.catch((err)=>{console.log(err)});

const app = express();
app.use(express.json());
const port = 3000;
app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
})
