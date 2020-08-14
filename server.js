const express = require('express');
const router = require('./api/api-router.js');
const cors = require('cors');
const server = express();

server.use(cors())
server.use(express.json());
server.use('/', router);

module.exports = server;