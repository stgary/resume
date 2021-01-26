const { DATABASE, DB_PASSWORD, DB_USER, DB_HOST, CLIENT } = require('../config.js');

const knex = require('knex')({
  client: CLIENT,
  version: '8.5.1',
  connection: {
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DATABASE
  }
});

module.exports = knex;