const express = require('express');
const router = require('../router/router.js');
const cors = require('cors');

const { DB_PASSWORD, DB_USER, DATABASE, DB_HOST, DATABASE_URL } = require('../config.js');

const app = express();

app.use(cors({
    Origin: 'http://localhost:3000',
}))
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
    res.send('***Server is up and running***');
});

module.exports = app;