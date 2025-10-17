const pool = require('../config/db');

const getHodById = async (id) => {
  const query = 'SELECT * FROM "HOD" WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = { getHodById };
