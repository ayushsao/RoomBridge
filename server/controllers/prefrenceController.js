import Preference from "../model/preference.model.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import User from "../model/user.model.js";

export const setPreferences = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newPreferences = req.body;

    console.log(newPreferences,userId);
    const preference = await Preference.findOneAndUpdate(
      { user_id: userId }, 
      { $set: newPreferences },
      { new: true, upsert: true}
    );

    const user = await User.findById(userId);
    user.preferences = preference._id;
    await user.save();

    // Send response
    res.status(201).json({
      success: true,
      data: preference,
    });
  } catch (error) {
    next(error);
  }
};

export const getPreferences = async (req, res, next) => {
  try {
    const preferences = await Preference.findOne({ user_id: req.user.id });

    if (!preferences) {
      return next(new ErrorHandler(404, "Preferences not found"));
    }

    res.status(200).json({
      success: true,
      data: preferences,
    });
  } catch (error) {
    next(error);
  }
};
