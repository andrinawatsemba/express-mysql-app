const db = require('../config/db');

const Student = {
  create: async (username, password, email) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query('INSERT INTO students (username, password, email, created_at) VALUES (?, ?, ?, NOW())', [username, hashedPassword, email]);
    return result;
  },

  findByUsername: async (username) => {
    const [rows] = await db.query('SELECT * FROM students WHERE username = ?', [username]);
    return rows;
  },

  getAll: async () => {
    const [rows] = await db.query('SELECT id, username, email, created_at FROM students');
    return rows;
  }
};

module.exports = Student;