import express from "express";
import { auth } from "../middlewares/auth.js";
import { createRoom,getAllRooms,getRoomById,updateRoom,deleteRoom } from "../controllers/roomController.js";
import { createAmenity, getAmenities, getAmenityById, deleteAmenity, updateAmenity } from "../controllers/amenityController.js";

const router=express.Router();

router.post('/create', auth, createRoom);
router.get('/', auth, getAllRooms);
router.get('/:id', auth, getRoomById);
router.put('/:id', auth, updateRoom);
router.delete('/:id', auth, deleteRoom);

router.post("/:room_id/amenities", auth, createAmenity);
router.get('/amenities', auth, getAmenities);
router.get('/amenities/:id', auth, getAmenityById);
router.put('/amenities/:id', auth, updateAmenity);
router.delete('/amenities/:id', auth, deleteAmenity);

export default router;