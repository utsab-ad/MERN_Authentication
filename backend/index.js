import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());  // req.body .,.

app.get("/", (req, res) => {
    res.send("Hello there, this is live");
})

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=> {
    connectDB();
    console.log(`The server is running on the http://localhost:${PORT}`);
})
