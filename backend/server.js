const express = require('express');
const mysql = require('mysql');

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Chocolate11",
    database:"practice_node"
})

app.get('/', (req, res) => {
    console.log('Get request')
    q = "SELECT * FROM books;"

    db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        } 
        console.log('Showing table')
        res.status(200);
        return res.json(data)
    })
})


app.listen(3000, () => {
    console.log('Connected to backend')
})