import mongoose from 'mongoose';

const amenitySchema = new mongoose.Schema({
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  amenities: {
    type: [String],
    enum: [
      'TV', 'Fridge', 'Kitchen', 'Wifi', 
      'Washing Machine', 'AC', 'Parking'
    ],
  },
  created_at: { type: Date, default: Date.now },
});

const Amenity = mongoose.model('Amenity', amenitySchema);

export default Amenity;
