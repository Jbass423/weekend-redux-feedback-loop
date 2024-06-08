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

//router.put('/:id', (req, res) => {
    //const { id } = req.params;
   // const { feeling, understanding, support, comments } = req.body;

    // Use the id parameter to identify the feedback entry to update
    // Update the corresponding entry in your feedback table with the new values
    //const sqlText = `UPDATE "feedback" 
                    // SET "feeling" = $1, 
                        // "understanding" = $2, 
                       /// // "support" = $3, 
                       // "comments" = $4 
                  //   WHERE "id" = $5`;
   // pool.query(sqlText, [feeling, understanding, support, comments, id])
    //.then(result => {
       //res.sendStatus(200); // Send a success response
   // })
   //.catch(err => {
       // console.log(err);
        //res.sendStatus(500); // Send an error response if something goes wrong
   // });
//});

module.exports = router;
