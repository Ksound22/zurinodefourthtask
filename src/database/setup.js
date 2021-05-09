// Connect mongoose

const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://chrisKay:ksound22@cluster0.qwg9w.mongodb.net/footballer?retryWrites=true&w=majority";

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
