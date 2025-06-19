const express = require('express');
const { createExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/expenses', authenticateToken, createExpense);
router.get('/expenses', authenticateToken, getExpenses);
router.put('/expenses/:id', authenticateToken, updateExpense);
router.delete('/expenses/:id', authenticateToken, deleteExpense);

module.exports = router;