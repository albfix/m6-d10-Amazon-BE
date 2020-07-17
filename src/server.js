const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { request } = require("express")
dotenv.config()
const db = require("./database")

const server = express()
server.use(cors())
server.use(express.json())//////VEDERE SE POI SARA' NECESSARIO TENERLO DOPO AVER FATTO DEI TEST CON DEI JSON

server.get("/", (req, res) => {
    res.send("OK")
})

server.get("/testamazon", async (req, res) => {
    const response = await db.query("SELECT 5+5")
    res.send(response)
})

server.listen(process.env.PORT || 3458, () => console.log("Server is running")) 