// Connect mongoose

const mongoose = require("mongoose");
const connectionString = `${process.env.MONGO_URI}`;

module.exports = function () {
  mongoose.connect(
    connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log("ERROR Connecting to DB", err);
      } else {
        console.log("DB Connected successfully");
      }
    }
  );
};
