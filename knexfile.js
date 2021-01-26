const { DB_USER, DATABASE_URL, DATABASE, CLIENT, CONNECTION } = require('./config.js');

module.exports = {
  development: {
    client: CLIENT,
    connection: { user: DB_USER, database: DATABASE }
  },
  production: { 
    client: CLIENT, 
    connection: CONNECTION ?ssl = 
  },
  useNullAsDefault: true,

};
