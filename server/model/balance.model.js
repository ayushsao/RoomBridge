import mongoose from 'mongoose';

const balanceSchema = new mongoose.Schema({
  user_from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  user_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
});

const Balance = mongoose.model('Balance', balanceSchema);

export default Balance;
