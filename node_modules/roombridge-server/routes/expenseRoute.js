import express from 'express';
import { auth } from '../middlewares/auth.js';
import { addExpense, addOwnShare, getBalances, settleExpense, shareExpense } from '../controllers/expenseController.js';

const router = express.Router();

router.post('/add', auth, addExpense);
router.get('/balances', auth, getBalances);
router.post('/expense/settle', auth,settleExpense);
router.post('/share', auth, shareExpense);
router.post('/add-own-share', auth, addOwnShare);

export default router;
