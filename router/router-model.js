const db = require('../data/dbConfig.js');

module.exports = {
  add,
  getViews
}

function add(value) {
  return( 
    db('views').update({ count: value })
  );
}

function getViews() {
  return db('views').select(count);
}