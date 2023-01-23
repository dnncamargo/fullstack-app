const express = require('express');
      cors    = require('cors');

const API_PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/api', (req, res) => {

    res.send({result: "hello, back"});
});

app.get('/quit', (req, res) => {

    res.send({result: "goodbye, back"});
});

app.listen(API_PORT, () => {
    console.log(`Server started on port ${API_PORT}`);
});