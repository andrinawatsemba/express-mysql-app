const Expense = require('../models/expenseModel');

const createExpense = async (req, res) => {
  const { studentId, amount, category, date, note } = req.body;
  try {
    await Expense.create(studentId, amount, category, date, note);
    res.status(201).json({ message: 'Expense added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getExpenses = async (req, res) => {
  const studentId = req.user.id; // From authenticated user
  try {
    const [results] = await Expense.getAll(studentId);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateExpense = async (req, res) => {
  const { amount, category, date, note } = req.body;
  const expenseId = req.params.id;
  try {
    await Expense.update(expenseId, amount, category, date, note);
    res.json({ message: 'Expense updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteExpense = async (req, res) => {
  const expenseId = req.params.id;
  try {
    await Expense.delete(expenseId);
    res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createExpense, getExpenses, updateExpense, deleteExpense };