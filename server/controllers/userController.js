import User from "../model/user.model.js";
import sendTokenResponse from "../utils/jwtToken.js";
import { ErrorHandler } from "../utils/errorHandler.js";

export const registerUser = async (req, res, next) => {
  const {
    username,
    email,
    password,
    full_name,
    mobile_number,
    mobile_visibility,
    gender,
    date_of_birth,
    profile_picture_url,
  } = req.body;

  const referralUserId = req.query.referral;
  console.log(referralUserId);
  try {
    const userExists = await User.findOne({ email,username });

    if (userExists) {
      return next(new ErrorHandler(400, "User already exists with this email"));
    }

    const user = await User.create({
      username,
      email,
      password_hash: password,
      full_name,
      mobile_number,
      mobile_visibility,
      gender,
      date_of_birth,
      profile_picture_url,
    });

    if (referralUserId) {
      const referrer = await User.findById(referralUserId);
      console.log(referrer);
      referrer.rewards += 10;
      await referrer.save();
    }
    sendTokenResponse(user, 201, res);
  } catch (error) {
    next(error);
  }
};
export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
  
    // Check if email and password were provided
    if (!email || !password) {
      return next(new ErrorHandler(400, 'Please provide email and password'));
    }
  
    try {
      // Find user by email
      const user = await User.findOne({ email }).select('+password_hash');
  
      if (!user) {
        return next(new ErrorHandler(401, 'Invalid email or password'));
      }
  
      // Check if password matches
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorHandler(401, 'Invalid email or password'));
      }
  
      // If matched, send token response
      sendTokenResponse(user, 200, res);
    } catch (error) {
      next(error);
    }
  };

  export const logoutUser = async (req, res, next) => {
    try {
      res.clearCookie("token");
  
      res
        .status(200)
        .json({ success: true, message: "User logged out successfully" });
    } catch (error) {
      next(error);
    }
  };


export const changePassword = async (req, res, next) => {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmNewPassword) {
    return next(new ErrorHandler(400, 'Please provide current and new password'));
  }

  try {
    const user = await User.findById(req.user.id).select('+password_hash');

    if (!user) {
      return next(new ErrorHandler(404, 'User not found'));
    }

    // Check if current password matches
    const isMatch = await user.matchPassword(currentPassword);

    if (!isMatch) {
      return next(new ErrorHandler(401, 'Current password is incorrect'));
    }

    if (newPassword !== confirmNewPassword) {
        throw new ErrorHandler(
          400,
          "New password and confirm password do not match"
        );
      }

    // Update password
    user.password_hash = newPassword;

    await user.save();

    // Send new token
    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

export const getUserProfile = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).populate('preferences');
      if (!user) {
        return next(new ErrorHandler(404, 'User not found'));
      }
  
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  };
  

  export const updateUserProfile = async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!user) {
        return next(new ErrorHandler(404, 'User not found'));
      }
  
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  };



export const getUsernameByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;

  
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      username: user.username
    });
  } catch (error) {
    next(error);
  }
};


export const getRewardByUsername = async (req, res, next) => {
  try {
  
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const rewards = user.rewards;

    res.status(200).json({
      success: true,
      rewards: rewards
    });
  } catch (error) {
    next(error);
  }
};

export const getIdByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    console.log(user.wallet_address)
    const data={ id: user._id, walletAddress: user.wallet_address }
    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    next(error);
  }
};





