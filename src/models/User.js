const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, 'Username is required'],
        minLength: [3, 'Username too short']
    },
    email : {
        type: String,
        required: [true, 'Email is required'],
        minLength: [10, 'email too short']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, "invalid password"]
    },
    createdElectronics: [{
        type: mongoose.Types.ObjectId,
        ref: 'Electronic'
    }],
    // signedUpCourses: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Course"
    // }]
});

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 12)
    this.password= hash;
 });
 
 userSchema.virtual('rePassword')
     .get(function() {
       return this._rePassword;
     })
     .set(function(value) {
         this._reword = value;
     });
 
 userSchema.pre('validate', function(next) {
     if (this.password !== this._reword) {
         this.invalidate('rePassword', 'The passwords should be matching');
     }
     next();
 });

const User = mongoose.model('User', userSchema)

module.exports = User