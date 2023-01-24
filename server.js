const { urlencoded } = require('express');
const express = require('express'),
      cors    = require('cors');

const dbOperation = require('./db_files/dboperation');
const client = require('./models/Client');


const API_PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(urlencoded());
app.use(cors());

app.post('/api', (req, res) => {
    console.log("api called");
    res.send({result: "hello, back"});
});

app.post('/quit', (req, res) => {
    console.log("quit called");
    res.send({result: "goodbye, back"});
});

// let Jeffy = new client(1002, "Jeffy", "Noir", "147258369321", "98765432174", "Kinoa Av 41", "FR");
// console.log(Jeffy);

// dbOperation.insertClient(Jeffy);

// dbOperation.getClients().then(res => {
//     console.log(res.recordset);
// })

app.listen(API_PORT, () => {
    console.log(`Server started on port ${API_PORT}`);
});