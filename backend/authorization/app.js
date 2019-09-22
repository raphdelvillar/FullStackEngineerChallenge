const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const app = express()
app.use(morgan("combine"))
app.use(bodyParser.json())

require("./routes")(app)
app.listen(process.env.PORT || 8001)