const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected'); 
  } catch (err) {
    console.error(err.message); 
    process.exit(1); 
  }
};

module.exports = connectDB; 