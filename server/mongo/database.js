const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});

const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = ConnectDB;
