const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { request } = require("express")
dotenv.config()
const db = require("./database")
const product = require("./routes/products")

const server = express()
server.use(cors())
server.use(express.json())//////VEDERE SE POI SARA' NECESSARIO TENERLO DOPO AVER FATTO DEI TEST CON DEI JSON

/*server.get("/testamazon", (req, res) => {
    res.send("response")
})*/

/*server.get("/product", async (req, res) => {
    const response = await db.query('SELECT * FROM "product"')
    res.send(req.body)
})*/

server.use("/product", product)

server.listen(process.env.PORT || 3458, () => console.log("Server is running")) 