const { HEROKU_POSTGRESQL_WHITE_URL, DB_USER, DATABASE } = require('./config.js');

const knex = require('knex')({
  useNullAsDefault: true,
  client: 'postgres',  
  connection: HEROKU_POSTGRESQL_WHITE_URL || { user: DB_USER, database: DATABASE }, 
  searchPath: ['knex', 'public'],
  pool: {
    min: 0,
    max: 7,
  },
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  ssl: {
    rejectUnauthorized: false,
  }
})

module.exports = knex;

//   production: {
//     useNullAsDefault: true,
//     client: 'postgres',
//     connection: HEROKU_POSTGRESQL_WHITE_URL || { user: DB_USER, database: DATABASE },
//     pool: {
//       min: 0,
//       max: 7,
//     },
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//   },

//   staging: {
//     useNullAsDefault: true,
//     client: 'postgres',
//     connection: HEROKU_POSTGRESQL_WHITE_URL || { user: DB_USER, database: DATABASE },
//     pool: {
//       min: 0,
//       max: 7,
//     },
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//   },

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/resumeDB.db3',
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//   },
// }
