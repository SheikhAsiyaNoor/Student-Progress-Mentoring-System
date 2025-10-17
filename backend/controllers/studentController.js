const { getStudentById, getAllStudents, updateStudent } = require('../models/studentModel');

// Get student profile
const getStudentProfile = async (req, res) => {
  try {
    const student = await getStudentById(req.user.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students (for HODs or Faculty)
const getAllStudentProfiles = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update student details
const updateStudentDetails = async (req, res) => {
  try {
    const updatedStudent = await updateStudent(req.user.id, req.body);
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getStudentProfile, getAllStudentProfiles, updateStudentDetails };
