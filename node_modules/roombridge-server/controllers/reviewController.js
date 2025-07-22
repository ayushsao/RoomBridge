import Review from '../model/review.model.js';

export const addReview = async (req, res, next) => {
  try {
    const review = await Review.create({ ...req.body, user_id: req.user.id });

    res.status(201).json({
      success: true,
      data: review
    });
  } catch (error) {
    next(error);
  }
};

export const getReviews = async (req, res, next) => {
    try {
      const reviews = await Review.find({ room_id: req.params.roomId });
  
      res.status(200).json({
        success: true,
        data: reviews
      });
    } catch (error) {
      next(error);
    }
  };

