
exports.up = function(knex) {
  return knex.schema.createTable("views", tbl => {
    tbl.increment();
    tbl.integer(count);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("views");
};
