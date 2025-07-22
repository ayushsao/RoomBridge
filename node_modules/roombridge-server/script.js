import mongoose from 'mongoose';
import User from './model/user.model.js'; // Adjust the path if needed
import fs from 'fs';
import bcrypt from 'bcryptjs';
import { connectDB } from './db.js'; // Adjust the path if needed

// Function to add users to the database
const addUsers = async () => {
  // Connect to MongoDB
  await connectDB();

  try {
    // Read users from JSON file
    const usersData = JSON.parse(fs.readFileSync('user.json', 'utf8'));

    // Hash passwords and create users
    for (const userData of usersData) {
      const salt = await bcrypt.genSalt(10);
      userData.password_hash = await bcrypt.hash(userData.password, salt);
      delete userData.password; // Remove the plaintext password

      const user = new User(userData);
      await user.save();
      console.log(`User ${user.username} added`);
    }

    console.log('All users have been added');
  } catch (error) {
    console.error('Error adding users:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Execute the function
addUsers();
