exports.up = function(knex) {
  return knex.schema.table("card_sets", function(table) {
    table.string("user_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("card_sets", function(table) {
    table.dropColumn("user_id");
  });
};
