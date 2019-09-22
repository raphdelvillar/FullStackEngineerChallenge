module.exports = (app) => {
    app.get("/employees", (req, res) => {
        connection = global.db
        connection.query("SELECT * FROM employees", (err, rows, fields) => {
            if (!err) {
                res.json({
                    "code": 200,
                    "status": "Ok",
                    "data": rows
                });
            }
        });

        connection.on("error", (err) => {
            res.json({
                "code": 500,
                "status": "Internal Server Error"
            });

            return;
        });
    })

    app.post("/employees", (req, res) => {
    })

    app.patch("/employees/:id", (req, res) => {
    })

    app.delete("/employees/:id", (req, res) => {
    })
}