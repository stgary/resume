const PORT = process.env.PORT || 3002;

const express = require('express');
const router = require('./api/api-router.js');
const cors = require('cors');
// const fs = require('fs');
// const https = require('https');
const server = express();

server.use(cors())
server.use(express.json());
server.use('/', router);

server.get('/', (req, res) => {
    res.send('Hello World');
});

// https.createServer({
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem'),
//   passphrase: 'pass'
// }, server)
server.listen(PORT);

module.exports = server;