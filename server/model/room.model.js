import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members_max: { type: Number, default: 1},
  title: { type: String},
  description: { type: String},
  address: { type: String, required: true},
  city: { type: String, required: true},
  state: { type: String, required: true},
  pin_code: { type: String, required: true},
  country: { type: String, required: true},
  price: { type: Number },
  looking_for: { type: String, required: true},
  available_from: { type: Date},
  available_to: { type: Date },
  roommates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  highlights: [{ type: String }],
  amenities: [],
  created_at: { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', roomSchema);

export default Room;

