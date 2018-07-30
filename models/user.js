const mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a username.']
    },
    email: {
        type: String,
        min: [3, 'Please enter an email in the correct format'],
        required: [true, 'Please enter an email']
    },
    password: {
        type: String,
        min: [8, 'Your password must be at least 8 characters large'],
        required: [true, 'Please enter a password.']
    },
    birthdate: {
        type: Date,
        required: true
    },
    bookmark: {
        type: Array
    }

});





const User = mongoose.model("User", userSchema);

// User.insertMany(
//     [
//     {
//       firstname: 'Alex',
//       lastname: 'Arevalo',
//       username: 'aarevalo12',
//       email: "aarevalo@gmail.com",
//       password: "todayisgreat",
//       birthdate: "01/17/1994",
//       bookmark: []
//     },
//     {
//         firstname: 'Ben',
//         lastname: 'Shim',
//         username: 'bshim12',
//         email: "bshim@gmail.com",
//         password: "ilovecoding",
//         birthdate: "01/17/1994",
//         bookmark: []
//     },
//     {
//         firstname: 'Celso',
//         lastname: 'Olivera',
//         username: 'olivera12',
//         email: "odrinks@gmail.com",
//         password: "bestdrinkever",
//         birthdate: "01/17/1994",
//         bookmark: []
//     }
//   ]
//   ).then(data => {
//     console.log(data);
//     // process.exit(0);
//   }).catch(err => {
//         console.error(err);
//         // process.exit(1);
//       });


module.exports = User;


// // methods ======================
// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// create the model for users and expose it to our app
// module.exports = mongoose.model('User', userSchema);
