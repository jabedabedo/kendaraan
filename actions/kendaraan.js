const kendaraan = require("../models/kendaraan")
const { isInteger } = require("lodash")
const User = require("../models/user")

const create = (req) => {
    let { merk, tipe, price } = req.body
    price = parseInt(price)
    console.log(`Value of price ${price}`)

    if(isInteger(price) === false) {
        return "Wrong type of `price`"
    }

    var insert_data = {
        merk,
        tipe,
        price,
        author
    }

    let data = new kendaraan(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    let query = await kendaraan.find({})
    .populate([
        {
            path: 'author',
            model: User
        }
    ]).exec()
    console.log(`Result ${query}`)

    return query
}

module.exports = {
    create,
    getAll
}