const express = require('express')
const knex = require("../../knex/knex.js")

const router = express.Router()

router.get("/card-sets/:id", async (req, res) => {

    try {
  
        const cardSet = await knex.raw(`
        SELECT card_sets.name, users.username AS creator_username, users.id AS creator_id, card_sets.id AS card_set_id, 
                  (
                    SELECT array_to_json(array_agg(row_to_json(f)))
                    FROM (
                      SELECT id, term, definition
                      FROM flashcards
                      WHERE flashcards.card_set_id::text = card_sets.id::text
                      ORDER BY id asc
                  ) f
              ) as flashcards
            FROM card_sets
            INNER JOIN users ON users.id::text = card_sets.user_id::text
            WHERE card_sets.id = '${req.params.id}'
            
            
               `);
              //  AND private IS NOT TRUE
  
           
        res.send({cardSet: cardSet.rows[0]});
      } catch(error) {
        console.log('Error: ', error)
      }
  });

  router.post("/search", async (req, res) => {
    try {
      const { search } = req.body.data
  
      const cardSets = await knex.raw(
        `
                SELECT card_sets.user_id, card_sets.name, card_sets.flashcards_count, users.username AS creator_name, card_sets.id AS card_set_id, 
                  (
                    SELECT array_to_json(array_agg(row_to_json(f)))
                    FROM (
                      SELECT id, term, definition
                      FROM flashcards
                      WHERE flashcards.card_set_id::text = card_sets.id::text
                      ORDER BY id asc
                      LIMIT 4
                  ) f
              ) as flashcards
            FROM card_sets 
            INNER JOIN users ON users.id::text = card_sets.user_id::text
            WHERE card_sets.private IS NOT TRUE
            AND name ILIKE '%${search}%'
          `
      );
        
        res.send(cardSets.rows)
    } catch(error) {
        console.log('Error: ', error)
    }
  })

module.exports = router