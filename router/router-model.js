const db = require('../data/dbConfig.js');

module.exports = {
  find,
  mod
}

function mod(newCount) {
  return db('visits').select('count').update({ count: newCount });
}

function find() {
  return db('visits').select('count').first();
}