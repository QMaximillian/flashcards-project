function addTimeStamps(knex, name) {
  return knex.schema
    .alterTable(name, (t) => {
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(() => {
      // We need to ensure the function exists, then add the table trigger
      return knex.raw(`
          CREATE OR REPLACE FUNCTION update_modified_column()
          RETURNS TRIGGER AS $$
          BEGIN
            NEW.updated_at = now();
            RETURN NEW;
          END;
          $$ language 'plpgsql';
  
          CREATE TRIGGER update_${name}_updated_at
          BEFORE UPDATE ON ${name}
          FOR EACH ROW
          EXECUTE PROCEDURE update_modified_column();
        `);
    });
}

function removeTimeStamps(knex, name) {
  return knex.schema.alterTable(name, (t) => {
    t.dropColumn("created_at");
    t.dropColumn("updated_at");
  });
}

module.exports = { addTimeStamps, removeTimeStamps };
