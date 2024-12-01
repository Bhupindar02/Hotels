const mongoose = require("mongoose");
require('dotenv').config();
//define the mongoDB connection URL
//for local setup
const mongoURL = process.env.MONGODB_URL_LOCAL
//for mongo atlash
// const mongoURL =process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get the default connection
const db = mongoose.connection;
//define eventlistner for db connection
db.on("connected", () => {
  console.log("Connected to mongoDB server");
});
db.on("error", (err) => {
  console.log("Connection error ", err);
});
db.on("disconnected", () => {
  console.log(" mongoDB server disconnected");
});

//export db connection
module.exports = db;