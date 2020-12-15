const utils = require("../utils");

exports.down = function (knex, Promise) {
  return utils.removeTimeStamps(knex, "users");
};

exports.up = function (knex, Promise) {
  return utils.addTimeStamps(knex, "users");
};
