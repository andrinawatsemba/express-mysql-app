const db = require('../config/db');

const Expense = {
  create: async (studentId, amount, category, date, note) => {
    const [result] = await db.query('INSERT INTO expenses (student_id, amount, category, date, note, created_at) VALUES (?, ?, ?, ?, ?, NOW())', [studentId, amount, category, date, note]);
    return result;
  },

  getAll: async (studentId) => {
    const [rows] = await db.query('SELECT * FROM expenses WHERE student_id = ?', [studentId]);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM expenses WHERE id = ?', [id]);
    return rows[0];
  },

  update: async (id, amount, category, date, note) => {
    const [result] = await db.query('UPDATE expenses SET amount = ?, category = ?, date = ?, note = ? WHERE id = ?', [amount, category, date, note, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query('DELETE FROM expenses WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Expense;