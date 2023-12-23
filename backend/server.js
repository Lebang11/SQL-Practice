const express = require('express');
const mysql = require('mysql');

const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

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

app.post('/books', async (req, res) => {
    console.log(req.body);
    q = 
    `INSERT INTO books VALUES (2, "${req.body.title}","${req.body.description}","${req.body.cover}");`
    //  CREATE TABLE user ("id" INT PRIMARY KEY NOT NULL,"name" VARCHAR(255) NOT NULL); INSERT INTO books VALUES (1,${req.body.name});`

    await db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.status(200)
        return res.json(data)
    })

})


app.listen(3001, () => {
    console.log('Connected to backend')
})