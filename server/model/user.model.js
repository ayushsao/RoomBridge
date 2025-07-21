import dotenv from 'dotenv';
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import crypto from 'crypto';

dotenv.config();


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  password_hash: { type: String, required: true },
  full_name: { type: String, required: true },
  mobile_number: { type: String, required: true },
  mobile_visibility: { type: Boolean, default: true },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE","male", "female", "Male", "Female"],
  },
  date_of_birth: { type: Date },
  rewards: { type: String, default: "0" },
  profile_picture_url: { type: String },
  bio: { type: String },
  preferences: { type: mongoose.Schema.Types.ObjectId, ref: "Preference" },
  rewards: { type: Number, default: 0 },
  wallet_address: { type: String },
  created_at: { type: Date, default: Date.now },
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password_hash')) {
    return next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password_hash = await bcrypt.hash(this.password_hash, salt);
  next();
});

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password_hash);
};

userSchema.methods.getSignedJwtToken = function() {
  const expiresIn = parseInt(process.env.JWT_COOKIE_EXPIRES_IN, 10);
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn });
};


userSchema.methods.generatePasswordResetToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');

  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

userSchema.statics.findByResetToken = function(resetToken) {
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  return this.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
};

const User = mongoose.model('User', userSchema);

export default User;
