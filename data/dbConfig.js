const { DATABASE, DB_USER, DB_HOST, DB_PASSWORD } = require('../config.js');
const pg = require('pg');

const knex = require('knex')({
  client: 'pg',
  version: '8.5.1',
  connection: {
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DATABASE
  }
})
