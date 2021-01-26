const { DATABASE, DB_PASSWORD, DB_USER, DB_HOST, CLIENT, POSTGRESQL_URL } = require('../config.js');

const knex = require('knex')({
  useNullAsDefaults: true,
  client: CLIENT,
  version: '8.5.1',
  connection: POSTGRESQL_URL,
  ssl: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  pool: { min: 0, max: 7 },
});

module.exports = knex;