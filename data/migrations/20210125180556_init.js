
exports.up = function(knex) {
  return knex.schema.createTable("views", tbl => {
    tbl.increments('id');
    tbl.integer('count');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("views");
};
