const mongoose = require('mongoose')

//defining schema 
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type: String,
        required: true  
    },
    email:{
        type:String,
        required: true ,
        unique:true
    },
    adress:{
        type: String,
    }
    ,
    salary:{
        type:Number,
        required:true
    }


})

//creat person models
const person = mongoose.model('employee',personSchema)
module.exports = person
