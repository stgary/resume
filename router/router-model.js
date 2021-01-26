const db = require('../data/dbConfig.js');

module.exports = {
  add,
  get
}

function add(newCount) {
  return db('views').update({ count: newCount });
}

function get() {
  return db('views').select('count').first();
}