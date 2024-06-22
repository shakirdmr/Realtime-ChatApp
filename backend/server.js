// const dotenv  = require("dotenv").config();
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
dotenv.config();
import express from "express";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from './routes/message.route.js';
import usersRoutes from './routes/users.route.js';
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express()
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));




//to pasrse incoming request with JSON payload
app.use(express.json());
// Use cookie-parser middleware
app.use(cookieParser());

         
// Enable CORS for all requests from http://localhost:3000



const PORT = process.env.PORT || 8800;


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes );
app.use("/api/users/", usersRoutes );



app.get("/", (req, res) => {
  res.send("HELLOW HOW DO U DO");
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT NUMBER ${PORT}`);
  connectToMongoDB();
});
