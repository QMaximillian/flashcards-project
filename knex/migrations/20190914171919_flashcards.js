exports.up = function(knex) {
  knex.schema.hasTable("flashcards").then(function(exists) {
    return knex.schema
      .createTable("flashcards", t => {
        t.uuid("id").primary();
        t.string("term");
        t.string("definition");
      })
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("flashcards");
};
