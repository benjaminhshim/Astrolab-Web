const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  name: 
    { 
      type: String, 
      required: true 
    },
  alias: 
    { 
      type: String, 
      required: true 
    },
  image_url: String,
  date: 
    { 
      type: Date, 
      default: Date.now 
    }
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
