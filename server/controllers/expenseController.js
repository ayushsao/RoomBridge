import Expense from '../model/expense.model.js';
import Balance from '../model/balance.model.js';
import User from '../model/user.model.js';
import { ErrorHandler } from '../utils/errorHandler.js';

export const addExpense = async (req, res, next) => {
  const { room_id, description, amount, paid_by, shared_by } = req.body;

  try {
    let totalShare = shared_by.reduce((sum, user) => sum + user.share, 0);
    if (totalShare !== amount) {
      return next(new ErrorHandler(400, 'Total shares do not match the amount'));
    }

    const expense = await Expense.create({ room_id, description, amount, paid_by, shared_by });

    for (let share of shared_by) {
      if (share.user_id !== paid_by) {
        await Balance.findOneAndUpdate(
          { user_from: share.user_id, user_to: paid_by },
          { $inc: { amount: share.share } },
          { upsert: true }
        );
      }
    }

    res.status(201).json({
      success: true,
      data: expense,
    });
  } catch (error) {
    next(error);
  }
};

export const getBalances = async (req, res, next) => {
  try {
    const balances = await Balance.find({ $or: [{ user_from: req.user.id }, { user_to: req.user.id }] })
      .populate('user_from', 'username email')
      .populate('user_to', 'username email');

    res.status(200).json({
      success: true,
      data: balances,
    });
  } catch (error) {
    next(error);
  }
};

export const settleExpense = async (req, res, next) => {
  const { expenseId } = req.body;

  try {
    const expense = await Expense.findById(expenseId);

    if (!expense) {
      return next(new ErrorHandler(404, 'Expense not found'));
    }

    if (expense.settled) {
      return next(new ErrorHandler(400, 'Expense is already settled'));
    }

    for (let share of expense.shared_by) {
      if (share.user_id !== expense.paid_by) {
        await Balance.findOneAndUpdate(
          { user_from: share.user_id, user_to: expense.paid_by },
          { $inc: { amount: -share.share } }
        );
      }
    }

    expense.settled = true;
    await expense.save();

    res.status(200).json({
      success: true,
      data: expense,
    });
  } catch (error) {
    next(error);
  }
};

export const shareExpense = async (req, res, next) => {
  const { expenseId, userId } = req.body;

  try {
    const expense = await Expense.findById(expenseId);

    if (!expense) {
      return next(new ErrorHandler(404, 'Expense not found'));
    }


    if (expense.paid_by !== req.user.id) {
      return next(new ErrorHandler(403, 'You are not authorized to share this expense'));
    }

    if (!expense.shared_by.includes(userId)) {
      expense.shared_by.push(userId);
      await expense.save();
    }

    res.status(200).json({ success: true, message: 'Expense shared successfully' });
  } catch (error) {
    next(error);
  }
};


export const addOwnShare = async (req, res, next) => {
  const { expenseId, userId, amount } = req.body;

  try {
  
    const expense = await Expense.findById(expenseId);

    if (!expense) {
      return next(new ErrorHandler(404, 'Expense not found'));
    }

   
    expense.shared_by.push({ user: userId, amount });
    await expense.save();

    res.status(200).json({ success: true, message: 'Your share added successfully' });
  } catch (error) {
    next(error);
  }
};
