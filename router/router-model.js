const db = require('../data/dbConfig.js');

module.exports = {
  counter,
  total
}

function counter() {
  return db('visits')
    .where({ id: 1 })
    .increment('count', 1);
}

function total() {
  return db('visits')
    .where({ id: 1})
    .select('count');
}