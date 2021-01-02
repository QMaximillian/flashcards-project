const { addTimestamps, removeTimestamps } = require("../utils");

exports.up = function (knex) {
  return knex.schema
    .hasTable("users_card_sets")
    .then(function (exists) {
      if (!exists) {
        return knex.schema
          .createTable("users_card_sets", (table) => {
            table.uuid("id").primary();
            table
              .uuid("user_id")
              .notNullable()
              .references("id")
              .inTable("users");
            table
              .uuid("card_set_id")
              .notNullable()
              .references("id")
              .inTable("card_sets")
              .onDelete("CASCADE");
            table
              .uuid("creator_id")
              .notNullable()
              .references("id")
              .inTable("users");
            table.string("last_seen_at");
            table.string("last_studied_at");
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            // table.uuid("user_id").notNullable().references("id").inTable("users");
          })
          .then(() => addTimestamps(knex, "users_card_sets"))
          .catch(console.log);
      }
    })
    .catch(console.log);
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users_card_sets");
};
