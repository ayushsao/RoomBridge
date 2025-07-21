import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  rating: { type: Number, min: 1, max: 5},
  comment: { type: String },
  created_at: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
