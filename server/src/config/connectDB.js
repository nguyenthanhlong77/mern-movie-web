const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6bzsr.mongodb.net/mern-movie-app?retryWrites=true&w=majority`
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error.messeage);
    process.exit(1);
  }
};

module.exports = connectDB;
