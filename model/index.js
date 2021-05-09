const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    authors: [
        {
            type: String,
            required: true
        }
    ]
    ,
    pages: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    
    released: {
        type: Date,
        default: Date.now
    }
})

const Books = mongoose.model("Books", bookSchema)

module.exports = Books;