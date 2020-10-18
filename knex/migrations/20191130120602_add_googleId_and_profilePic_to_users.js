exports.up = function(knex) {
  return knex.schema.table("users", function(table) {
    table.string("google_id");
    table.string('profile_pic');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", function(table) {
    table.dropColumn("google_id");
    table.dropColumn('profile_pic');
  });
};
