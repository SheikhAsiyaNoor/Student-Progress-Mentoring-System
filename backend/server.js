const express = require('express');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const hodRoutes = require('./routes/hodRoutes');

const app = express();
app.use(express.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // Allow frontend
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed methods
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Preflight request success
  }

  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/hod', hodRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
