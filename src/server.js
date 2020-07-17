const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { request } = require("express")
dotenv.config()
//const db = require("./database")
const productRouter = require("./routes/products")

const server = express()
server.use(cors())
server.use(express.json())//////VEDERE SE POI SARA' NECESSARIO TENERLO DOPO AVER FATTO DEI TEST CON DEI JSON

server.use("./products", productRouter)

server.listen(process.env.PORT || 3458, () => console.log("Server is running")) 