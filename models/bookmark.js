const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  alias: { //yelp's unique identifier - allows you to easily build url's pointing you back to Yelp. It can be also used as unique ID.
    type: String,
    required: true
  },
  image_url: String,

  date: {
    type: Date,
    default: Date.now
  }
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
