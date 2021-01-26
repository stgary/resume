const { DB_PASSWORD, DB_USER, DATABASE, DB_HOST, DATABASE_URL, CONNECTION } = require('./config.js');

module.exports = {
  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: './data/DB.db3',
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  staging: {
    useNullAsDefault: true,
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    useNullAsDefault: true,
    client: 'pg',
    version: '8.5.1',
    connection: {
      host : DB_HOST,
      port: 5432,
      user : DB_USER,
      database : DATABASE
    },
    ssl: {
      rejectUnauthorized: false
    },
    searchPath: 'knex,public',
    pool: {
      min: 0,
      max: 7
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  }
}

