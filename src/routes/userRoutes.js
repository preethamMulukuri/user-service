const express = require('express');
const { register, login, getProfile } = require('../controllers/userController'); // Fix: Properly import getProfile
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

// Public Routes
router.post('/register', register);
router.post('/login', login);

// Protected Route
router.get('/profile', verifyToken, getProfile);

module.exports = router;
