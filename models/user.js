const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: 
    { 
        type: String, 
        required: true 
    },
  lastname: 
    { 
        type: String, 
        required: true 
    },
  username: 
    {

        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a username.']
    },
    email: 
        {
            type: String,
            min: [3, 'Please enter an email in the correct format'],
            required: [true, 'Please enter an email']
        },
    password: 
        {
            type: String,
            min: [8, 'Your password must be at least 8 characters large'],
            required: [true, 'Please enter a password.']
        },
    birthdate: 
        { 
            type: String, 
            required: true 
        },
    bookmark:
        {
            type: Array 
        }
});

userSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}


userSchema.pre('save', function(next) {
    if (!this.password) {
        console.log('models/user.js ======= NO PASSWORD PROVIDED ========');
        next();
    } else {
        console.log('models/user.js hashPassword in pre save');
        this.password = this.hashPassword(this.password);
        next();
    }
    
})





const User = mongoose.model("User", userSchema);


module.exports = User;

