const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  get
}

function insert(newCount) {
  return db('views')
    .select('count')
    .insert(newCount);
}

function get() {
  return db('views')
    .select('count')
    .first();
}