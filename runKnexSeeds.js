#!/usr/bin/env node
const { exec } = require("child_process");

exec(
  "knex migrate:rollback && knex migrate:latest && knex seed:run --specific=01_users.js && knex seed:run --specific=02_card_sets.js && knex seed:run --specific=03_flashcards.js && knex seed:run --specific=04_users_card_sets.js",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
