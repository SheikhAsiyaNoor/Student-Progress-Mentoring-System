const pool = require('../config/db');

const getFacultyById = async (id) => {
  const query = 'SELECT * FROM "Faculty" WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const getAllFaculty = async () => {
  const query = 'SELECT * FROM "Faculty"';
  const result = await pool.query(query);
  return result.rows;
};

module.exports = { getFacultyById, getAllFaculty };
