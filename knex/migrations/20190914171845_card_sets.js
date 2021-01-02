const { addTimestamps, removeTimestamps } = require("../utils");

exports.up = function (knex) {
  return knex.schema
    .hasTable("card_sets")
    .then(function (exists) {
      if (!exists) {
        return knex.schema
          .createTable("card_sets", (table) => {
            table.uuid("id").primary();
            table.string("name").notNullable();
            table
              .uuid("user_id")
              .notNullable()
              .references("id")
              .inTable("users")
              .onDelete("RESTRICT");
            table.boolean("private").notNullable();
            table.integer("flashcards_count").notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
          })
          .then(() => addTimestamps(knex, "card_sets"))
          .catch(console.log);
      }
    })
    .catch(console.log);
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("card_sets")
    .then(() => removeTimestamps(knex, "card_sets"));
};
