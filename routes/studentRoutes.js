const express = require('express');
const { getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/student', authenticateToken, getAllUsers);
router.put('/student/:id', authenticateToken, updateUser);
router.delete('/student/:id', authenticateToken, deleteUser);

module.exports = router;