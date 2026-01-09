const express = require('express');
const { signup, login, getCurrentUser } = require('../controllers/authController');
const { protectRoute } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/me', protectRoute, getCurrentUser);

module.exports = router;
