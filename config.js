const { getMaxListeners } = require("./api/server")

module.exports = {
    USER_NAME: process.env.USER_NAME, 
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    NODE_ENV: process.env.NODE_ENV,
    DB_USER: process.env.DB_USER || 'ucwwwxohxxpkum',
    DB_PASSWORD: process.env.DB_PASSWORD || 'f3bc2fc696a9fe6e5318c40fa3e49095e18ba02726eea23facda2e243e3897df',
    DATABASE: process.env.DATABASE || 'dacd5mstpvmvau',
    DB_HOST: process.env.DB_HOST || 'ec2-34-196-34-158.compute-1.amazonaws.com',
    ENVIRONMENT: process.env.ENVIRONMENT,
    DATABASE_URL: process.env.DATABASE_URL,
    CLIENT: process.env.CLIENT || 'postgres',
    CONNECTION: process.env.CONNECTION,
    DB_PORT: process.env.DB_PORT || 5432,
    DB_LABEL: process.env.DB_LABEL,
    HEROKU_POSTGRESQL_WHITE_URL: process.env.HEROKU_POSTGRESQL_WHITE_URL || 'postgres://ucwwwxohxxpkum:f3bc2fc696a9fe6e5318c40fa3e49095e18ba02726eea23facda2e243e3897df@ec2-34-196-34-158.compute-1.amazonaws.com:5432/dacd5mstpvmvau'
}