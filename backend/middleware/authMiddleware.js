const { sessions } = require('../controllers/authController');

const authMiddleware = (req, res, next) => {
  const sessionId = req.header('Authorization');
  if (!sessionId || !sessions[sessionId]) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  req.user = sessions[sessionId]; // Attach user session to request
  next();
};

module.exports = authMiddleware;
