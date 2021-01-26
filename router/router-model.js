const db = require('../data/dbConfig.js');

module.exports = {
  add,
  get
}

function add(newCount) {
  return db('views')
    .update({ count: newCount })
    .where({ id });
}

function get() {
  return db('views')
    .select('count')
    .first();
}