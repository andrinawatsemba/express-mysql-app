const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const chapterRoutes = require('./routes/chapterRoutes');
const mysql = require('mysql2');

dotenv.config();

const app = express();
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // Set your password in .env
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Make db accessible via req.db if needed
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', chapterRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});