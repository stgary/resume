const db = require('../data/dbConfig.js');

module.exports = {
  update,
  get
}

function update(newCount) {
  return db('views')
    .update({ count: newCount });
}

function get() {
  return db('views')
    .select('count')
    .first();
}