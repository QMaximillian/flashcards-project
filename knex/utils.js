function addTimestamps(knex, name) {
  // We need to ensure the function exists, then add the table trigger
  return knex.raw(
    `
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
      `
  );
}

function removeTimestamps(knex, name) {
  return knex.raw(`
    DROP FUNCTION IF EXISTS ${name}
  `);
}
module.exports = { addTimestamps, removeTimestamps };
