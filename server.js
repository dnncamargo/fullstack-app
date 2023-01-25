const express = require('express'),
      cors    = require('cors');

const dbOperation = require('./db_files/dboperation');

const API_PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/fetch', async (req, res) => {
    const resultquery = await dbOperation.getClients(req.body.name);
    res.send(resultquery.recordset);
});

app.post('/save', async (req, res) => {
    await dbOperation.insertClient(req.body);
    const resultquery = await dbOperation.getClients(req.body.clientID);
    res.send(resultquery.recordset);
});

app.listen(API_PORT, () => {
    console.log(`Server started on port ${API_PORT}`);
});