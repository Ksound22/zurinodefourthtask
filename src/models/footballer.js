//  Schema
const mongoose = require("mongoose");

const footballerSchema = new mongoose.Schema({
  name: String,
  email: String,
  country: String,
  club: String,
  number: Number,
  age: Number,
});

const Footballer = mongoose.model("Footballer", footballerSchema);

module.exports = Footballer;
