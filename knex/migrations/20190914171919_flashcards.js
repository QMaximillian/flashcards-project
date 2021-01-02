const { addTimestamps, removeTimestamps } = require("../utils");

exports.up = function (knex) {
  return knex.schema
    .hasTable("flashcards")
    .then(function (exists) {
      if (!exists) {
        return knex.schema
          .createTable("flashcards", (table) => {
            table.uuid("id").primary();
            table.string("term").notNullable();
            table.string("definition").notNullable();
            table
              .uuid("card_set_id")
              .notNullable()
              .references("id")
              .inTable("card_sets")
              .onDelete("RESTRICT");
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
          })
          .then(() => addTimestamps(knex, "flashcards"))
          .catch(console.log);
      }
    })
    .catch(console.log);
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("flashcards")
    .then(() => removeTimestamps(knex, "flashcards"));
};
