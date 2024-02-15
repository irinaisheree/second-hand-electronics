const mongoose = require('mongoose')

const electronicSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "All fields are mandatory"],
        minLength : [10, 'Name should be at least 10 characters long']
    },
    type : {
        type: String,
        required: [true, "All fields are mandatory"],
        minLenght: [2, 'Type should be at least 2 characters long']
    },
    damages:{
        type: String,
        required: [true, "All fields are mandatory"],
        minLength: [10, 'Damages should be at least 10 characters long']
    },
    image:{
        type: String,
        required: [true, "All fields are mandatory"],
        match:[ /^https?:\/\//, 'Invalid url']
    },
    description:{
        type: String,
        required: [true, "All fields are mandatory"],
         minLength: [10, 'Description should be at least 10 characters long'],
         maxLength: [200, 'Description should be less than 200 characters']
    },
    production:{
        type: Number,
        required: [true, "All fields are mandatory"],
        min: [1900, 'Year should be after 1900'],
        max: [2023, 'Year should be before 2023']
    },
    exploitation: {
        type: Number,
        required: [true, 'All fields are mandatory'],
        min: [0, 'Exploitation should be a positive number']
    },
    price: {
        type: Number,
        required: [true, 'All fields are mandatory'],
        min: [0, 'Price should be a positive number'] 
    },
    // owner:{
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // }, 
    // buyingList:[{
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // }]
})

const Electronic = mongoose.model('Electronic', electronicSchema);

module.exports = Electronic