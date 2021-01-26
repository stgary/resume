// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/resumeDB.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'Personal-Site-Stats',
      user:     'postgre',
      password: 'j233ancigp3po'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data.migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true,
  }

};
