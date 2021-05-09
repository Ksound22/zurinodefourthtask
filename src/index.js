const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const dbSetup = require("./database/setup");
const footballerRoute = require("./routes/footballerRoute");
dbSetup();

// Middleware
app.use(express.json());
app.use(footballerRoute);

app.get("/", (req, res) => {
  res.send("This is the CRUD App.");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
