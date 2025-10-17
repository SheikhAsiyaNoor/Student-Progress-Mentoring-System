const express = require('express');
const { getFacultyProfile, getAllFacultyProfiles } = require('../controllers/facultyController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, getFacultyProfile);
router.get('/all', authMiddleware, getAllFacultyProfiles);  // For HODs

module.exports = router;
