const express = require('express'),
      cors    = require('cors');

const dbOperation = require('./db_files/dboperation');
//const client = require('./models/Client');

const API_PORT = process.env.PORT || 5000;

const app = express();

let client;
let session;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async (req, res) => {
    //dbOperation.insertClient(req.body);
    const resultquery = await dbOperation.getClients(req.body.name);
    // console.log(req.body);
    // console.log(resultquery.recordset);
    res.send(resultquery.recordset);
});

app.post('/fetch', async (req, res) => {
    console.log(req.body);
    const resultquery = await dbOperation.getClients(req.body.name);

    res.send(resultquery.recordset);
});

app.listen(API_PORT, () => {
    console.log(`Server started on port ${API_PORT}`);
});