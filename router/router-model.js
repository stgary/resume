const db = require('../data/dbConfig.js');

module.exports = {
  add,
  getViews
}

function add(curr) {
  return db('views').update({ count: curr });
}

function getViews() {
  return db('views');
}