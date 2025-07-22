import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

export async function connectDB() {
  try {
    const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI || "mongodb://localhost:27017/roombridge";
    console.log("Attempting to connect to MongoDB with URI:", mongoURI);
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    console.log("Warning: Running without MongoDB connection. Some features may not work.");
    // Don't exit the process, just continue without DB for now
  }
}