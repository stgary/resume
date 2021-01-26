const { DATABASE, DB_PASSWORD, DB_USER, DB_HOST, CLIENT } = require('../config.js');

const knex = require('knex')({
  useNullAsDefaults: true,
  client: CLIENT,
  version: '8.5.1',
  connection: {
    label: DB_LABEL,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    port: DB_PORT
  },
  ssl: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  pool: { min: 0, max: 7 },
});

module.exports = knex;