const db = require('../data/dbConfig.js');

module.exports = {
  find,
  mod
}

function mod(newCount) {
  return db('visits')
    .where({ id: 1 })
    .update({ count: newCount });
}

function find() {
  return db('visits')
    .where({ id: 1 })
    .select('count');
}