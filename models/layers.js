const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const layersSchema = new Schema({
  myId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  icon: {type: String,
  required: true},

  categories: {
    type: Array,
  },
  isChecked: {
    type: Boolean,
    default: false
  },
  bookmark: {
    type: Array
  }

});

const Layers = mongoose.model("Layers", layersSchema);

// Layers.insertMany(
//   [{
//   "myId": 0,
//   "title": "Bars",
//   "icon": "/assets/images/AstrolabIconImages/Bars.png",
//   "categories": ["bars", "barcrawl", "beergardens", "pianobars", "beerhall", "tapas"],
//   "isChecked": false
// },
// {
//   "myId": 1,
//   "title": "Cafés",
//   "icon": "../../assets/images/AstrolabIconImages/Cafe.png",
//   "categories": ["coffee", "cafes", "internetcafe", "hkcafe"],
//   "isChecked": false
// },
// {
//   "myId": 2,
//   "title": "General",
//   "icon": "../../assets/images/AstrolabIconImages/General.png",
//   "categories": ["bars", "coffee", "landmarks", "restaurants", "parks", "hardware", "nightlife", "taxis", "towncarservice", "limos"],
//   "isChecked": false


// },
// {
//   "myId": 3,
//   "title": "Home + Garden",
//   "icon": "../../assets/images/AstrolabIconImages/Hammer.png",
//   "categories": ["homeandgarden"],
//   "isChecked": false


// },
// {
//   "myId": 4,
//   "title": "Landmarks",
//   "icon": "../../assets/images/AstrolabIconImages/Landmark.png",
//   "categories": ["landmarks", "amusementparks", "stadiumarenas"],
//   "isChecked": false


// },
// {
//   "myId": 5,
//   "title": "Nature",
//   "icon": "../../assets/images/AstrolabIconImages/MtnFlag.png",
//   "categories": ["parks", "communitygardens"],
//   "isChecked": false


// },
// {
//   "myId": 6,
//   "title": "Nightlife",
//   "icon": "../../assets/images/AstrolabIconImages/Disco.png",
//   "categories": ["nightlife"],
//   "isChecked": false



// },
// {
//   "myId": 7,
//   "title": "Restaurants",
//   "icon": "../../assets/images/AstrolabIconImages/Fork.png",
//   "categories": ["restaurants"],
//   "isChecked": false


// },
// {
//   "myId": 8,
//   "title": "Retail",
//   "icon": "../../assets/images/AstrolabIconImages/Retail.png",
//   "categories": ["shopping"],
//   "isChecked": false


// },
// {
//   "myId": 9,
//   "title": "Transportation",
//   "icon": "../../assets/images/AstrolabIconImages/Transpo.png",
//   "categories": ["taxis", "towncarservice", "limos"],
//   "isChecked": false


// }
// ]
// ).then(data => {
//   console.log(data);
//   process.exit(0);
// }).catch(err => {
// console.error(err);
// ;bprocess.exit(1);
//  })



module.exports = Layers;
