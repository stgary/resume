const express = require('express');
const router = require('../router/router.js');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
}))
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
    res.send('***Server is up and running***');
});

module.exports = app;