const db = require('../data/dbConfig.js');

module.exports = {
  find,
}

function find() {
  return db('visits')
    .where({ id: 1 })
    .increment('count', 1);
}