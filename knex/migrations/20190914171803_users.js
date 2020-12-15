exports.up = function (knex) {
  knex.schema.hasTable("users").then(function (exists) {
    return knex.schema.createTable("users", (t) => {
      t.uuid("id").primary();
      t.string("email").unique().notNullable();
      t.string("password").notNullable();
      t.string("first_name").notNullable();
      t.string("last_name").notNullable();
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
