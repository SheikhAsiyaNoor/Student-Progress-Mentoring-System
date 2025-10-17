const express = require('express');
const { getStudentProfile, getAllStudentProfiles, updateStudentDetails } = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, getStudentProfile);
router.get('/all', authMiddleware, getAllStudentProfiles);  // For HOD/Faculty
router.put('/update', authMiddleware, updateStudentDetails);

module.exports = router;
