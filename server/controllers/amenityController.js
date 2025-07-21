import Amenity from "../model/amenity.model.js"; // Adjust the path as needed
import Room from "../model/room.model.js"; // Adjust the path as needed

// Create a new Amenity
export const createAmenity = async (req, res) => {
  try {
    const { room_id } = req.params;
    const amenity = new Amenity({
      ...req.body,
      room_id: room_id,
    });
    const savedAmenity = await amenity.save();

    // Save the amenity ID in the room's amenities array
    const room = await Room.findById(room_id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    room.amenities.push(savedAmenity._id);
    await room.save();

    res.status(201).json(savedAmenity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Amenities
export const getAmenities = async (req, res) => {
  try {
    const amenities = await Amenity.find().populate("room_id");
    res.status(200).json(amenities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Amenity by ID
export const getAmenityById = async (req, res) => {
  try {
    const amenity = await Amenity.findById(req.params.id).populate("room_id");
    if (!amenity) {
      return res.status(404).json({ message: "Amenity not found" });
    }
    res.status(200).json(amenity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Amenity by ID
export const updateAmenity = async (req, res) => {
  try {
    const updatedAmenity = await Amenity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAmenity) {
      return res.status(404).json({ message: "Amenity not found" });
    }
    res.status(200).json(updatedAmenity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Amenity by ID
export const deleteAmenity = async (req, res) => {
  try {
    const deletedAmenity = await Amenity.findByIdAndDelete(req.params.id);
    if (!deletedAmenity) {
      return res.status(404).json({ message: "Amenity not found" });
    }
    res.status(200).json({ message: "Amenity deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
