const pool = require('../config/db');

// Fetch student by ID
const getStudentById = async (id) => {
  const query = 'SELECT * FROM "Student" WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Fetch all students
const getAllStudents = async () => {
  const query = 'SELECT * FROM "Student"';
  const result = await pool.query(query);
  return result.rows;
};

// Update student details
const updateStudent = async (id, updates) => {
  const { phone, presentAddress } = updates;
  const query = 'UPDATE "Student" SET phone = $1, presentAddress = $2 WHERE id = $3 RETURNING *';
  const result = await pool.query(query, [phone, presentAddress, id]);
  return result.rows[0];
};

module.exports = { getStudentById, getAllStudents, updateStudent };
