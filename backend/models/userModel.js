const pool = require('../config/db');

const getUserByEmail = async (email) => {
    const query = 'SELECT * FROM "users" WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  };
  

const registerUser = async (email, password, accountType) => {
    const query = `INSERT INTO "users" (email, password, account_type, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *`;
    const result = await pool.query(query, [email, password, accountType]);
    return result.rows[0];
  };
  

module.exports = { getUserByEmail, registerUser };
