const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const server = express()

server.get("/", (req, res) => {
    res.send("OK")
})

server.listen(process.env.PORT || 3458, () => console.log("Server is running")) 