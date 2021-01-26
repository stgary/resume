const db = require('../data/dbConfig.js');

module.exports = {
  add,
  visits
}

function add() {
  return db('visits')
    .where({ id: 1 })
    .increment('count', 1);
}

function visits() {
  return db('visits')
    .where({ id: 1})
    .select('count');
}