const express = require("express")
const db = require("../../database")
const product = require("../../../products.json") ///MOMENTANEO

const router = express.Router()


router.get("/:_id", async (req, res) => {
    const response = await db.query('SELECT _id, name, description, brand, imageUrl, price FROM "product" WHERE _id = $1',
        [req.params._id])

    if (response.rowCount === 0)
        return res.status(404).send("Not exist")

    res.send(response.rows[0])
})

router.post("/", async (req, res) => {
    const response = await db.query(`INSERT INTO "product" (_id, name, description, brand, imageUrl, price, category) 
                                     Values ($1, $2, $3, $4, $5, $6, $7)
                                     RETURNING *`,
        [req.body._id, req.body.name, req.body.description, req.body.brand, req.body.imageUrl, req.body.price, req.body.category])

    console.log(response)
    res.send(response.rows[0])
})