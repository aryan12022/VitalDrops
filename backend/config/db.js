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

const MONGO_URI = "mongodb+srv://choukseyaryan49:dpCQuxobzYckW0Vv@cluster0.fo6nw.mongodb.net/testDB?retryWrites=true&w=majority";

const connectDB=async ()=>
  mongoose.connect(MONGO_URI, {
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
