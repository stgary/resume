const { getMaxListeners } = require("./api/server")

module.exports = {
    USER_NAME: process.env.USER_NAME, 
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    NODE_ENV: process.env.NODE_ENV,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DATABASE,
    DB_HOST: process.env.DB_HOST,
    ENVIRONMENT: process.env.ENVIRONMENT,
    DATABASE_URL: process.env.DATABASE_URL,
    CLIENT: process.env.CLIENT,
    CONNECTION: process.env.CONNECTION,
    DB_PORT: process.env.DB_PORT,
    DB_LABEL: process.env.DB_LABEL,
    POSTGRESQL_URL: process.env.POSTGRESQL_URL,
}