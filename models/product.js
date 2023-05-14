const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: String,
        default: 4.8,
    },
    createdAt: {
        type:Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "sony", "boat", "nokia"],
            message: `{value} is not supported`,
        },
    },

});

module.exports = mongoose.model("Product", productSchema)