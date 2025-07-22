import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  paid_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shared_by: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      share: { type: Number, required: true }
    }
  ],
  settled: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
