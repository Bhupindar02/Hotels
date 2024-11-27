const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: "String",
        enum: ['starter', 'main course', 'dessert', 'beverage'],
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    }

})

//creat menu model
const Menu = mongoose.model('menu',menuItemSchema);
module.exports = Menu

