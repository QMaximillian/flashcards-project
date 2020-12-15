exports.up = function (knex) {
  return knex.schema.table("flashcards", function (table) {
    table.string("card_set_id");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table("flashcards", function (table) {
    table.dropColumn("card_set_id");
  });
};
