const express = require('express')
const app = express()
const fs = require("fs")
const database = require('./mysqlconnection')

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    fs.readFile('./public/views/index.html', (err, data) => {
        if (err) {
            return res.end(err.message);
        }

        res.write(data)
        res.end()
    })

})

app.get("/api/buses", (req, res)=>{
    database.query("Select * from routes", (err, result)=>{
        
        if (err){
           return res.status(500).send(err.message)
        }

        res.status(200).json(result)
    })
})

app.listen(3000, () => console.log("Waa daaran yahay appku http:localhost:3000"))