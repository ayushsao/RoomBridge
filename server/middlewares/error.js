import { ErrorHandler } from "../utils/errorHandler.js";

export const handleError = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'PRODUCTION') {
        if (err.code === 11000) {
            err = new ErrorHandler(400, 'The provided data already exists.');
        } else if (err.name === 'JsonWebTokenError') {
            statusCode = 401; 
            err = new ErrorHandler(statusCode, 'Invalid Json web token');
        }else if (err.name === 'TokenExpiredError') {
            statusCode = 401; 
            err = new ErrorHandler(statusCode, 'Token has expired');
        }
    }

    if (!(err instanceof ErrorHandler)) {
        err = new ErrorHandler(statusCode, err.message);
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        res.status(statusCode).json({
            success: false,
            message: err.message || "Internal Server Error"
        });
    } else {
        res.status(statusCode).json({
            success: false,
            error: err,
            errorMessage: err.message,
            stack: err.stack
        });
    }
};
