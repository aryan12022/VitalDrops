// const mongoose = require('mongoose');
// const colors = require('colors');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log(`Connected to Blood Bank Database ${mongoose.connection.host}`.bgYellow.white)
//     } catch (error) {
//         console.log(`MongoDB DB error ${error}`.bgRed.white);
//     }
// }

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1); // stop the server if DB connection fails
  }
};

module.exports = connectDB;
