exports.up = function(knex) {
  return knex.schema.table("card_sets", function(table) {
    table.integer("flashcards_count");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("card_sets", function(table) {
    table.dropColumn("flashcards_count");
  });
};
