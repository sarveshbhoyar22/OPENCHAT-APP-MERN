// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import {MongoClient} from "mongodb";

// dotenv.config();

// const uri = process.env.MONGO_DB_URI;
// const client = new MongoClient(uri);
// let db;
// async function ConnectToDatabase() {
//   if (!db) {
//     try {
//       await client.connect();
//       console.log("Connected to MongoDB!");
//       db = client.db("CHAT-APP-DB"); // Replace with your database name
//     } catch (error) {
//       console.error("Database connection failed:", error);
//     }
//   }
//   return db;
// }

// export default ConnectToDatabase;
