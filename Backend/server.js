import path from 'path';
import express from "express";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
dotenv.config();


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routs.js"; 
import userRoutes from "./routes/user.routs.js"; 

import connectToMongoDB from "./DB/connectToMongoDb.js";
import { app, server } from "./socket/socket.js";



const port = process.env.PORT || 5000;

const __dirname = path.resolve();
// console.log("path",__dirname);

app.use(cookieParser()); // to parse the incoming cookies from (req.cookies)
app.use(express.json()); // to parse the incoming requests with the JSON payloads (from req.body);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/Frontend/dist")))

const test = path.join(__dirname, "Frontend", "dist");
console.log("test path",test)
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
})

app.get("/",(req,res)=>{
    res.send("Hello World!");
})
  // console.log("backend")

server.listen(port,()=>{
    connectToMongoDB();
    console.log(`server running on port  http://localhost:${port}`)
})
  