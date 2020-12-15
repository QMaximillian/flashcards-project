exports.up = function (knex) {
  knex.schema.hasTable("users_card_sets").then(function (exists) {
    return knex.schema.createTable("users_card_sets", (t) => {
      t.uuid("id").primary();
      t.uuid("user_id");
      t.uuid("card_set_id");
      t.uuid("creator_id");
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users_card_sets");
};
