
exports.up = function(knex) {
  return knex.schema.createTable("visits", tbl => {
    tbl.integer('id');
    tbl.integer('count').defaultTo(1);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("visits");
};
