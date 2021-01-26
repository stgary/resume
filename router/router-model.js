const db = require('../data/dbConfig.js');

module.exports = {
  add,
  getViews
}

function add(id, curr) {
  return db('views').update({ count: curr }).where({ id: id });
}

function getViews() {
  return db('views');
}