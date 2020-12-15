const utils = require("../utils");

exports.down = function (knex, Promise) {
  return utils.removeTimeStamps(knex, "card_sets");
};

exports.up = function (knex, Promise) {
  return utils.addTimeStamps(knex, "card_sets");
};
