const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const port = process.env.PORT || 8002

const app = express()
app.use(morgan("combine"))
app.use(bodyParser.json())

require("./mysql")
require("./routes")(app)
app.listen(port)

console.log(`Employee API listening on ${port} port!`)