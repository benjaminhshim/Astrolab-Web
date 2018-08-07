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

// Bookmark.insertMany(
//   [
  
//   {
//     name: 'TestAlex',
//     alias: 'blahblah',
//     image_url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
//   },
//   {
//     name: 'TestAlex1234',
//     alias: 'MLAJASHFASDFDAS',
//     image_url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
//   },
//   {
//     name: 'TestBOZZGAS',
//     alias: 'hellohellohello',
//     image_url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
//   }
// ]
// ).then(data => {
//   console.log(data);
//   // process.exit(0);
// }).catch(err => {
//       console.error(err);
//       // process.exit(1);
//     });



module.exports = Bookmark;

