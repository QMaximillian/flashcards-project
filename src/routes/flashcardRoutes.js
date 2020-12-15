const express = require("express");
const knex = require("../../knex/knex.js");
const uuidv4 = require("uuid");

const router = express.Router();

router.post("/flashcards", async (req, res) => {
  try {
    const { fields, card_set_id } = req.body;

    fields.forEach(async (row) => {
      await knex("flashcards").insert({
        id: uuidv4(),
        term: row.term,
        definition: row.definition,
        card_set_id,
      });
    });
  } catch (error) {
    console.log(error);
  }
  res.send({ done: true });
});

router.patch("/flashcards/:id", async (req, res) => {
  try {
    const { id, term, definition } = req.body.field;

    await knex("flashcards").where("id", id).update({
      term,
      definition,
    });

    res.send({ done: true });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
