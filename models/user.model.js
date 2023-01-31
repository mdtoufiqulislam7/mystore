const mongoose = require("mongoose");


const userschema = mongoose.Schema({
    Gmail: {
        type: String,
        reuire: true,
    },
    password: {
        type: Number,
        reuire: true,
    },
    createat: {
        type: Date,
        default: Date.now

    },
})

module.exports = mongoose.model("info",userschema);