const express = require('express');
const connectDB = require('./config/db'); 
const cors = require('cors');
const iTunesRoutes = require('./routes/iTunesRoutes'); 
require('dotenv').config();

const app = express(); 

// Connect to MongoDB
connectDB();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json({ extended: false })); // Enable JSON parsing for incoming requests

// Define the route for the API
app.use('/api', iTunesRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')); // Serve the React build files
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html'); // Serve the main HTML file
  });
}

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 