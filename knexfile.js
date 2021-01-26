const { DATABASE_URL } = require('./config.js');

module.exports = {
  development: {
    client: 'pg',
    connection:  'C:\Program Files\PostgreSQL\13\data',
    migrations: {
      directory: './data/migrations',
    },
    ssl: {
      rejectUnauthorized: false
    },
    seeds: { directory: './data/seeds' },
    useNullAsDefault: true,
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
    client: 'pg',
    version: '8.5.1',
    connection: DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './data/migrations',
    },
    useNullAsDefault: true
  }
}

