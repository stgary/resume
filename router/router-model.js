const db = require('../data/dbConfig.js');

module.exports = {
  update,
  get
}

function update(newCount) {
  return db('visits')
    .update({ count: newCount });
}

function get() {
  return db('visits')
    .select('count')
    .first();
}