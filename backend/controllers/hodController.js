const { getHodById } = require('../models/hodModel');

const getHodProfile = async (req, res) => {
  try {
    const hod = await getHodById(req.user.id);
    if (!hod) return res.status(404).json({ message: 'HOD not found' });

    res.status(200).json(hod);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getHodProfile };
