exports.up = knex => {
  return knex.schema.alterTable("users", table => {
    table
      .string("password")
      .nullable()
      .alter();
  });
};

exports.down = knex => {
  return knex.schema.alterTable("users", table => {
    table
      .string("password")
      .notNullable()
      .alter();
  });
};
