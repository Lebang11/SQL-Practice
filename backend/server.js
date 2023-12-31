const express = require('express');
const mysql = require('mysql');
const connection = require('./database');

require('dotenv').config();

const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });


app.get('/', (req, res) => {
    console.log('Get request...');
    connection.query('SELECT * FROM users;',
    
        (error, results, fields) => {
            if (error) throw error;
            res.json(results);
        })
    
})

app.post('/users', async (req, res) => {
    console.log(req.body);
    q = 
    `INSERT INTO users (first_name, middle_name, last_name, email, password, company, phone) VALUES ?`
    values = [['Lebang', 'Albanus', 'Nong', 'lebangnong@gmail.com', 'monkeyOOO', 'SalvationTees', '0623997680']]

    connection.query(q, [values],(err, data) => {
        if (err) {
            return res.json(err)
        }
        res.status(200)
        return res.json(data)
    })

})

app.post('/books', async (req, res) => {
    console.log(req.body);
    q = 
    `INSERT INTO books VALUES (2, "${req.body.title}","${req.body.description}","${req.body.cover}");`
    //  CREATE TABLE user ("id" INT PRIMARY KEY NOT NULL,"name" VARCHAR(255) NOT NULL); INSERT INTO books VALUES (1,${req.body.name});`

    await connection.query(q, [values], (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.status(200)
        return res.json(data)
    })

})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Connected to backend')
})