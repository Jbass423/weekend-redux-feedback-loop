const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    const { feeling, understanding, support, comments ,flagged,date} = req.body;
  
   
    console.log('Received POST data:', req.body);
  
    const queryText = `
      INSERT INTO "feedback" ("feeling", "understanding", "support", "comments","flagged","date")
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
  

  
    pool.query(queryText, [feeling, understanding, support, comments,flagged,date])
      .then((result) => {
        console.log('Query result:', result);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error('Failed in router POST:', error);
        res.sendStatus(500);
      });
  });

  router.delete('/:id', (req, res) => {

    const feedbackId = req.params.id;
  
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`
  
    pool.query(queryText, [feedbackId])
    .then((result) => {
        console.log("remove successful!!!");
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log("error in router Delete", err);
        res.sendStatus(500)
  
    })
   
  });
  


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})



module.exports = router;
