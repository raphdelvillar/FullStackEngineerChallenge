const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "paypay",
})

db.connect((err) => {
    if (err) {
        throw err;
    }
 
    console.log("Connected to database");
});
global.db = db;