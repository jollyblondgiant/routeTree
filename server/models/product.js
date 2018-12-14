const mongoose = require("mongoose")
var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name your product"], minlength: [3, "Product name must be at least 3 characters long"]},
    price: {type: [Number, "Price must be a number"], required: [true, "Name your price"], min: [1, "Minimum price is 1"]},
    img : {type: String, required: [true, "Please include an image URL"]}

})

mongoose.model('Product', ProductSchema)