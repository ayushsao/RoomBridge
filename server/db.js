import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

export async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}