const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

require("./config")
require("./mysql")

const port = global.config.http.port
const serviceName = global.config.service.name

const app = express()
app.use(morgan("combine"))
app.use(bodyParser.json())

require("./routes")(app)

app.listen(port)

console.log(`${serviceName} API listening on ${port} port!`)