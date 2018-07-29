const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Use routes folder
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/astrolab");



app.listen(PORT, function() {
  console.log(`🌎 ==> OUTKAST 🎧  ANDRE ${PORT}!`);
});
