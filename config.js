const { getMaxListeners } = require("./api/server")

module.exports = {
    USER_NAME: process.env.USER_NAME || 'stgary0@gmail.com', 
    SMTP_PASSWORD: process.env.SMTP_PASSWORD || 'j233ancigp3po',
    NODE_ENV: process.env.NODE_ENV || 'production',
    DB_USER: process.env.DB_USER || 'zncwpvwnuymcvm',
    DB_PASSWORD: process.env.DB_PASSWORD || '9c5b35df36dcce9dd2029b6aac2dd6ba4e18050e81910a6a0e5d9ff695befba8',
    DATABASE: process.env.DATABASE || 'd8h0e5vp7m6grh',
    DB_HOST: process.env.DB_HOST || 'ec2-52-72-190-41.compute-1.amazonaws.com',
    ENVIRONMENT: process.env.ENVIRONMENT || 'development'


}