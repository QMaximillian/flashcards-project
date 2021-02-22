const { addTimestamps, removeTimestamps } = require("../utils");

exports.up = function (knex) {
  return knex.schema
    .hasTable("users")
    .then(function (exists) {
      if (!exists) {
        return knex.schema
          .createTable("users", (table) => {
            table.uuid("id").primary();
            table.string("email").unique().notNullable();
            table.string("password").notNullable();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("username").notNullable();
            table.string("profile_pic_url").nullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
          })
          .then(() => addTimestamps(knex, "users"))
          .catch(console.log);
      }
    })
    .catch(console.log);
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .then(() => removeTimestamps(knex, "users"));
};
