const PORT = process.env.PORT || 3002;

const express = require('express');
const router = require('./api/api-router.js');
const cors = require('cors');
const server = express();

server.use(cors())
server.use(express.json());
server.use('/', router);

server.get('/', (req, res) => {
    res.send('***Server is up and running***');
});

server.listen(PORT);

module.exports = server;