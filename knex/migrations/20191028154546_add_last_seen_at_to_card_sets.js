exports.up = function (knex) {
  return knex.schema.table("users_card_sets", function (table) {
    table.string("last_seen_at");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table("users_card_sets", function (table) {
    table.dropColumn("last_seen_at");
  });
};
