const crypto = require('crypto');
const { getUserByEmail, registerUser } = require('../models/userModel');

// Simple in-memory session store
const sessions = {};

// Hash password using Node.js crypto
const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

// Register user
const register = async (req, res) => {
  const { email, password, accountType } = req.body;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = hashPassword(password);
    const newUser = await registerUser(email, hashedPassword, accountType);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login user
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await getUserByEmail(email);
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const hashedPassword = hashPassword(password);
//     if (hashedPassword !== user.password) return res.status(400).json({ message: 'Invalid email or password' });

//     // Create a session token (random ID)
//     const sessionId = crypto.randomUUID();
//     sessions[sessionId] = { id: user.id, accountType: user.accountType };

//     res.status(200).json({ sessionId, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await getUserByEmail(email);
//     if (!user) return res.status(400).json({ message: "Invalid email or password" });

//     const hashedPassword = hashPassword(password);
//     if (hashedPassword !== user.password) return res.status(400).json({ message: "Invalid email or password" });

//     // Create a session token (random ID)
//     const sessionId = crypto.randomUUID();
//     sessions[sessionId] = { id: user.id, accountType: user.accountType };
//     // console.log("Login Response:", {
//     //   sessionId,
//     //   user: { id: user.id, email: user.email, accountType: user.accountType }
//     // });
    
//     res.status(200).json({ sessionId, user: { id: user.id, email: user.email, accountType: user.accountType } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
  
// };
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const hashedPassword = hashPassword(password);
    if (hashedPassword !== user.password) return res.status(400).json({ message: "Invalid email or password" });

    // Create a session token (random ID)
    const sessionId = crypto.randomUUID();
    sessions[sessionId] = { id: user.id, accountType: user.account_type }; // Use account_type from DB

    // Map account_type to accountType in the response
    res.status(200).json({
      sessionId,
      user: {
        id: user.id,
        email: user.email,
        accountType: user.account_type, // Map account_type to accountType
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Logout user (clear session)
const logout = (req, res) => {
  const { sessionId } = req.body;
  if (sessions[sessionId]) {
    delete sessions[sessionId];
    return res.status(200).json({ message: 'Logged out successfully' });
  }
  res.status(400).json({ message: 'Invalid session' });
};

module.exports = { register, login, logout, sessions };
