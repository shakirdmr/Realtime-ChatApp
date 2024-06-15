// const dotenv  = require("dotenv").config();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import express from "express";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from './routes/message.route.js';
import usersRoutes from './routes/users.route.js';
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express()
//to pasrse incoming request with JSON payload
app.use(express.json());
// Use cookie-parser middleware
app.use(cookieParser());

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
