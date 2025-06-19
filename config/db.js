// config/db.js

const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,        // ✅ Add the correct port (default for MySQL)
  user: 'root',
  password: '',      // ✅ Add your password here if you set one in MySQL
  database: 'student_expenses'
});

// Connect to database
connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database.');
});

module.exports = connection;
