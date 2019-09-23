const gateway = require("fast-gateway")
const fs = require("fs");
const toml = require("toml")

const config = toml.parse(fs.readFileSync("./config.toml", "utf-8"))
global.config = config

const port = global.config.http.port
const serviceName = global.config.service.name
const host = global.config.http.host

gateway({
    middlewares: [
        require("cors")(),
        require("helmet")()
    ],

    routes: [{
        prefix: "/employees",
        target: `${host}:8002/employees`
    }, {
        prefix: "/reviews",
        target: `${host}:8003/reviews`
    }]
}).start(port).then(_ => {
    console.log(`${serviceName} listening on ${port} port!`)
})