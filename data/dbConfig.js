const knex = require("knex");

const config = require("../knexfile.js");

// const environment = process.env.NODE_ENV || "production";

module.exports = knex('production');