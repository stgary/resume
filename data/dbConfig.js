const { DATABASE_URL } = require('../config.js');

require('knex')({
  client: 'pg',
  connection: DATABASE_URL,
  searchPath: 'knex,public',
  pool: { min: 0, max: 7 }
})