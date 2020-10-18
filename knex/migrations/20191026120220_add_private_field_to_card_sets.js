exports.up = function(knex) {
  return knex.schema.table("card_sets", function(table) {
    table.boolean("private");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("card_sets", function(table) {
    table.dropColumn("private");
  });
};
