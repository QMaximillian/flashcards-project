const express = require("express");
const knex = require("../../knex/knex.js");
const { checkJwt } = require("../utils.js");

const router = express.Router();

router.post("/update-username", checkJwt, async (req, res) => {
  try {
    const { newUsername } = req.body;
    const { sub: user_id } = req.user;
    const usernameExists = await knex("users")
      .where({ username: newUsername })
      .first();

    if (usernameExists.username === newUsername) {
      return res.send("Username exists, please choose another");
    }

    const updatedUsername = await knex("users")
      .update({ username: newUsername })
      .where({ id: user_id })
      .returning("username")
      .first();

    res.send({ username: updatedUsername });
  } catch (error) {
    console.log(error);
  }
});

router.get("/user/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await knex
      .select("*")
      .from("users")
      .where({ username })
      .first();

    res.send({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
