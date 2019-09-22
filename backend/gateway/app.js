const gateway = require("fast-gateway")
const port = process.env.PORT || 8000

gateway({
    middlewares: [
        require("cors")(),
        require("helmet")()
    ],

    routes: [{
        prefix: "/employees",
        target: "http://localhost:8002/employees"
    }, {
        prefix: "/reviews",
        target: "http://localhost:8003/reviews"
    }]
}).start(port).then(server => {
    console.log(`API Gateway listening on ${port} port!`)
})