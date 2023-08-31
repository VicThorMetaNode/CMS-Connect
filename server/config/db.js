const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB smoothly Connected: ${conn.connection.host}`.bgMagenta.bold
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
    process.exit(1); // exit application with a non-zero status code
  }
};

module.exports = connectDB;
