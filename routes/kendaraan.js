const express = require('express')
const router = express.Router()
const { create, getAll } = require("../actions/kendaraan")
const { isString } = require("lodash")

router.post("/", (req, res) => {
    let data = create(req)

    if(isString(data) === true) {
        return res.status(400).json({
            status: "error",
            message: data
        })
    }

    return res.status(200).json({
        status: "success",
        data,
        message: "Data Masuk!"
    })
})

router.get("/", async (req, res) => {
    let data = await getAll()

    return res.send({
        status: "success",
        data,
        message: "semua data masuk"
    })
})

module.exports = router