import Room from "../model/room.model.js";
import User from "../model/user.model.js";
import Preference from "../model/preference.model.js";
import { ErrorHandler } from '../utils/errorHandler.js';

export const createRoom = async (req, res, next) => {
  try {
    console.log("createRoom")
    const room = await Room.create({
      ...req.body,
      user_id: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: room
    });
  } catch (error) {
    next(error);
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const { gender, minRent, maxRent, city, availableFrom, availableTo } = req.query;
    let filter = {};

    console.log(gender, minRent, maxRent, city, availableFrom, availableTo)


    if (gender) {
      const users = await User.find({ gender: gender });
      const userIds = users.map(user => user._id);
      filter.user_id = { $in: userIds };
    }


    if (minRent || maxRent) {
      filter.price = {};
      if (minRent) Number(filter.price).$gte = Number(minRent);
      if (maxRent) Number(filter.price).$lte = Number(maxRent);
    }

    if (city) {
      filter.city = city;
    }

    if (availableFrom || availableTo) {
      filter.available_from = {};
      filter.available_to = {};
      if (availableFrom) filter.available_from.$gte = new Date(availableFrom);
      if (availableTo) filter.available_to.$lte = new Date(availableTo);
    }

    if (availableTo !== undefined && availableTo !== "") {
      filter.available_to = {};
      filter.available_to.$lte = new Date(availableTo);
    }

    const rooms = await Room.find(filter).populate('user_id');

    res.status(200).json({
      success: true,
      data: rooms
    });
  } catch (error) {
    next(error);
  }
};


  export const getRoomById = async (req, res, next) => {
    try {
     const room = await Room.findById(req.params.id).populate({
       path: "user_id",
       populate: { path: "preferences" },
     });
      
      if (!room) {
        return next(new ErrorHandler(404, 'Room not found'));
      }
  
      res.status(200).json({
        success: true,
        data: room
      });
    } catch (error) {
      next(error);
    }
  };

  export const updateRoom = async (req, res, next) => {
    try {
      const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!room) {
        return next(new ErrorHandler(404, 'Room not found'));
      }
  
      res.status(200).json({
        success: true,
        data: room
      });
    } catch (error) {
      next(error);
    }
  };

  export const deleteRoom = async (req, res, next) => {
    try {
      const room = await Room.findByIdAndDelete(req.params.id);
  
      if (!room) {
        return next(new ErrorHandler(404, 'Room not found'));
      }
  
      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(error);
    }
  };