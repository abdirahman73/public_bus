const mysql = require("mysql")

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'public_bus'
})

conn.connect((err)=>{
    if (err){
        return console.log("Cillad ayaa jirta", err.message)
    }


    console.log("Connected.")
})

module.exports = conn