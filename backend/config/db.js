const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost', 
  database: 'student_mentoring_system',
  password: '12',  
  port: 5432,
});

module.exports = pool;
