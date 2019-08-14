const mongoose = require("mongoose")
const Schema = mongoose.Schema

let bookSchema = new Schema({
    merk: String,
    tipe: String,
    price: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Book = mongoose.model("kendaraan", bookSchema)

module.exports = Book