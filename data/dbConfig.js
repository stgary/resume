const { DATABASE_URL } = require('../config.js');

const db = require('knex')({
  client: 'pg',
  connection: DATABASE_URL,
  searchPath: 'knex,public',
  pool: { min: 0, max: 7 },
  migrations: { 
    directory: './data/migrations' 
  },
  seeds: { 
    directory: './data/seeds'
  },
  useNullAsDefault: true,
});

module.exports = { db }