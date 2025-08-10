const express = require('express');
const path = require('path');
const router = express.Router();

// Route for /start
router.get('/start', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/start.html'));
});

module.exports = router;