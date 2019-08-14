const express = require('express')
const app = express()
require("./db") // database connection

/**
 * Import routes files
 */
const kendaraan_routes = require("./routes/kendaraan")
const users = require("./routes/user")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

/**
 * Set routes imported
 */
app.use("/kendaran", kendaraan_routes)
app.use("/user", users)

app.listen(3322, () => {
    console.log(`Example app listening on port 3322`)
})