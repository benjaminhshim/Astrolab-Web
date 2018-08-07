const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose")
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');
// Define middleware here

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: 'mernie sanders',
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/astrolab");



app.listen(PORT, function () {
  console.log(`🌎 ==> OUTKAST 🎧  ANDRE ${PORT}!`);
});
