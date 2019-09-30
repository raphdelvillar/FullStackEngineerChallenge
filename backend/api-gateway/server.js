const gateway = require("fast-gateway");

const toml = require("toml");
const fs = require("fs");
const config = toml.parse(fs.readFileSync("./config.toml", "utf-8"));

const PORT = process.env.PORT || config.http.port;

gateway({
  middlewares: [require("cors")(), require("helmet")()],

  routes: [
    {
      prefix: "/dashboard",
      target: "http://localhost:8000",
      middlewares: [
        require("express-jwt")({
          secret: config.http.secret
        })
      ]
    },
    {
      prefix: "/authorization",
      target: "http://localhost:8001"
    },
    {
      prefix: "/employee",
      target: "http://localhost:8002",
      middlewares: [
        require("express-jwt")({
          secret: config.http.secret
        })
      ]
    },
    {
      prefix: "/review",
      target: "http://localhost:8003",
      middlewares: [
        require("express-jwt")({
          secret: config.http.secret
        })
      ]
    },
    {
      prefix: "/mailer",
      target: "http://localhost:8004",
      middlewares: [
        require("express-jwt")({
          secret: config.http.secret
        })
      ]
    }
  ]
})
  .start(PORT)
  .then(server => {
    console.log(`${config.service.name} listening on ${PORT} port!`);
  });
