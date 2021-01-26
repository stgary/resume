// const knex = require("knex");

// const config = require("../knexfile.js");

// const environment = process.env.DB_ENV || "development";

// module.exports = knex(config[environment]);

const { HEROKU_POSTGRESQL_WHITE_URL, DB_USER, DATABASE } = require('../config.js');

const knex = require('knex');

const config = { 
  
  useNullAsDefault: true,
  client: 'postgres',  
  connection: HEROKU_POSTGRESQL_WHITE_URL || { user: DB_USER, database: DATABASE }, 
  searchPath: ['knex', 'public'],
  pool: {
    min: 0,
    max: 7,
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
  ssl: {
    rejectUnauthorized: false,
  }
}

module.exports = knex(config);
