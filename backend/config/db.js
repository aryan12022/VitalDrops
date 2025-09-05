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



const connectDB=async ()=>
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
  mongoose.disconnect();
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
});

module.exports = connectDB;
