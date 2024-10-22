const express = require('express');
const { searchiTunes } = require('../controllers/iTunesController');
const auth = require('../middleware/auth');

const router = express.Router();

// Define the route to search the iTunes API, protected by JWT authentication
router.get('/search', auth, searchiTunes);

module.exports = router; 