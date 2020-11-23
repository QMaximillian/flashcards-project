const express = require( 'express')
const knex = require( "../../knex/knex.js")
const v4 = require( "uuid").v4
const { checkJwt } = require( '../utils.js')
const uuidv4 = require("uuid")

const router = express.Router()

router.post("/card-sets", checkJwt,  async (req, res) => {


  try {
    const { name, flashcards_count, isPrivate } = req.body;
    const { sub: user_id } = req.user
    const cardSetId = await knex("card_sets")
      .insert({
        id: uuidv4(),
        name,
        user_id,
        flashcards_count,
        private: isPrivate
      })
      .returning("id")
      .then(r => r[0]);

    res.send({ cardSetId });
  } catch (error) {
    console.log(error);
  }
});

router.post("/recent-card-sets", checkJwt, async (req, res) => {
  try {
        const { limit, id } = req.body;
        const recentCardSets = await knex
          .select("users_card_sets.*", "users.username AS owner", "card_sets.name", "card_sets.id", "card_sets.flashcards_count")
          .from("users_card_sets")
          .innerJoin(
            "card_sets",
            knex.raw("card_sets.id::text"),
            knex.raw("users_card_sets.card_set_id::text")
          )
          .innerJoin(
            "users",
            knex.raw("users.id::text"),
            knex.raw("users_card_sets.creator_id::text")
          )
          .where(function(){
              this.where("users_card_sets.user_id", id)
          })
          .whereNotNull("last_seen_at")

          .orderBy("last_seen_at", "desc")

          .limit(limit || 6);

        return res.send({recentCardSets});
      } catch (error) {
        console.log(error)
  }
})

router.patch("/update-flashcard-count", checkJwt, async (req, res) => {
  try {
    const { flashcards_count, id } = req.body
    await knex('card_sets')
    .where({ id })
    .update({ flashcards_count })

    res.end()
  } catch (error) {
    console.log(error)
  }
})

router.patch("/card-set", checkJwt, async (req, res) => {
  try {
    const { id, isPrivate } = req.body

    await knex('card_sets')
      .where({ id })
      .update({
        private: isPrivate
      })

    res.end()
  } catch(error){
    console.log(error)
  }
})

router.post("/users-card-set/new", checkJwt, async (req, res) => {

  try {
    const { card_set_id, creator_id, last_seen_at } = req.body;
    const { sub: user_id } = req.user

   let results = await knex("users_card_sets")
    .where("card_set_id", card_set_id)
    .andWhere("creator_id", creator_id || user_id)
    .andWhere("user_id", user_id)

    if (results.length === 0) {
     await knex("users_card_sets")
      .insert({
        id: uuidv4(),
        user_id,
        card_set_id,
        last_seen_at: last_seen_at ? last_seen_at : null,
        // If the posted creator is the same as the user the creator is the user
        // If the creator is not the same as the user, use the posted creator_id as the creator 
        creator_id: !creator_id || creator_id === user_id ? user_id : creator_id
      })
    }
      
      res.end()
  } catch (error) {
    console.log(error);
  }
});

router.get("/studied/:username", async (req, res) => {

  try {

      const cardSets = await knex
        .select("users_card_sets.last_studied_at", "users_card_sets.card_set_id", "card_sets.flashcards_count", "users.username AS creator_name", "card_sets.name")
        .from("users_card_sets")
        .innerJoin('users', 'users_card_sets.creator_id', 'users.id')
        .innerJoin('card_sets', 'users_card_sets.card_set_id', 'card_sets.id')
        .where("users.username", req.params.username)
        .whereNotNull('users_card_sets.last_studied_at')
        .orderBy('users_card_sets.last_studied_at', 'DESC')

      res.send({cardSets});
    } catch(error) {
      console.log(error)
    }
});

// router.get("/card-sets", async (req, res) => {
//   const cardSets = await knex
//     .select("*")
//     .from("card_sets")
//     .where({ user_id: req.id });

//   res.send(cardSets);
// });

router.get('/users-card-sets/:username', async (req, res) => {
  try {
    const userCardSets = await knex
      .select(
        "users_card_sets.id",
        "users_card_sets.creator_id",
        "users_card_sets.card_set_id",
        "users_card_sets.last_seen_at",
        "card_sets.name",
        "card_sets.flashcards_count",
        "card_sets.created_at",
        "card_sets.updated_at",
        knex.raw("users.username AS creator_name")
      )
      .from("users_card_sets")
      .innerJoin("card_sets", "users_card_sets.card_set_id", "card_sets.id")
      .innerJoin("users", "users_card_sets.creator_id", "users.id" )
      .where("users.username", req.params.username)
      .orderBy('card_sets.created_at', 'DESC')
      // .andWhere("users_card_sets.user_id", req.user[0].id);
      res.send({userCardSets});
  } catch(error) {
    console.log(error)
  }

  
})

router.post("/users-card-set-last-studied", checkJwt, async (req, res) => {
  try {
    const { last_studied_at, card_set_id } = req.body;
    const { sub: user_id } = req.user
    await knex
      .select("*")
      .from("users_card_sets")
      .update({ last_studied_at })
      .where({ user_id })
      .andWhere({card_set_id});

      res.end()
  } catch (error) {
    console.log(error);
  }
});

router.post("/users-card-set-last-seen", checkJwt, async (req, res) => {
  try {

    const { last_seen_at, card_set_id } = req.body;
    const { sub: user_id } = req.user

    await knex.select("*").from('users_card_sets')
      .update({ last_seen_at })
      .where({ user_id })
      .andWhere({ card_set_id })
      

      res.end()
  } catch (error) {
    console.log(error);
  }
});

router.delete('/card-sets/:id', checkJwt, async (req, res) => {

  try {
    await knex('card_sets')
      .where("id", req.params.id)
      .del()

      res.send({message: `Success: ${req.params.id} deleted`})
  } catch(error) {
    console.log(error)
  }
})



module.exports = router