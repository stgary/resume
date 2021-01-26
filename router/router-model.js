const db = require('../data/dbConfig.js');

module.exports = {
  add,
  getViews
}

function add(newCount) {
  return db('views').update({ count: newCount });
}

function getViews(id) {
  return db('views').where({ id: id });
}