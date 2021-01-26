
exports.up = function(knex) {
  return knex.schema.createTable("visits", table => {
    table.serial('id');
    table.integer('count').defaultTo(1);
    table.timestamp('arrival', { useTz: true });
    table.timestamp('departure', { useTz: true });
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("visits");
};
