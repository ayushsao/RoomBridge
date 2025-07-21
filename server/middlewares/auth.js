import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';
import { ErrorHandler } from '../utils/errorHandler.js';

dotenv.config();


export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token) {
      throw new ErrorHandler(401, 'Unauthorized.Login firsts');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    console.log(user);

    if (!user) {
      throw new ErrorHandler(401, 'Unauthorized');
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

//authorize roles

export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      // Check if user is authenticated
      if (!req.user) {
        return next(new ErrorHandler(401, 'Unauthorized. Login first.'));
      }
  
      // Check if user's role is included in the allowed roles
      if (!roles.includes(req.user.role)) {
        return next(new ErrorHandler(403, 'Forbidden. Insufficient permissions.'));
      }
  
      next();
    };
  };



