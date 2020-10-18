exports.up = function(knex) {
  knex.schema.hasTable("card_sets").then(function(exists) {
    return knex.schema
      .createTable("card_sets", t => {
        t.uuid("id").primary();
        t.string("name");
      })
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("card_sets");
};
