const jwt = require('jsonwebtoken');

// Middleware function to authenticate requests using JWT
module.exports = function (req, res, next) {
  // Get token from the request header
  const token = req.header('Authorization');

  // Check if no token is provided
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token and extract the user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Add user information to the request object
    next(); 
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' }); // Return error if token is invalid
  }
};