const mongoose = require("mongoose");

const ConnectMongoDB = async (mongoURI) => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};

module.exports = { ConnectMongoDB };
