const express = require('express');
const { getHodProfile } = require('../controllers/hodController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, getHodProfile);

module.exports = router;
