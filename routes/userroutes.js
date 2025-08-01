const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

router.get('/user-info', authenticateToken, (req, res) => {
  res.json({ email: req.user.email });
});

module.exports = router;