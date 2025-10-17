const { getFacultyById, getAllFaculty } = require('../models/facultyModel');

const getFacultyProfile = async (req, res) => {
  try {
    const faculty = await getFacultyById(req.user.id);
    if (!faculty) return res.status(404).json({ message: 'Faculty not found' });

    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllFacultyProfiles = async (req, res) => {
  try {
    const faculty = await getAllFaculty();
    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getFacultyProfile, getAllFacultyProfiles };
