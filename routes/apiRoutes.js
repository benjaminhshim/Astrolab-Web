// const axios = require("axios");
const router = require("express").Router();
const yelp = require('yelp-fusion');
const apiKey = 'tjWeCYoOxLdJP26PTWIdR0ww5r4Wyw0iI93pvORu_2o_j2pJBPAGZBpWFAPSfolo1WYhug7az9S78WiCKL5T9neJIUnRYmADfu6wsRdTRxPvz3BvJJqzwSAqDYy8WnYx';
const bookmarksController = require("../controllers/bookmarksController");
const path = require("path");

// let searchRequest = {
//   term: 'UCLA Bootcamp',
//   location: 'los angeles, ca'
// };

const client = yelp.client(apiKey);


router.get('/hello', (req, res) => {
  let searchRequest = (req.query);
  console.log("this is the search req", searchRequest)
  console.log("this is the search req", req.query)
  console.log("this is the search req", req.query2)

  // YELP CALL FROM BACK END ---->>>

  client.search(searchRequest).then(response => {
    console.log("express", response.jsonBody.businesses)
    res.send(response.jsonBody.businesses)
  }).catch(e => {
    console.log(e);
  });
});

router.get('/reviews', (req, res) => {

  client.reviews('jennifer-k-oliveira-dds-santa-monica').then(response => {
    console.log(response.jsonBody.reviews.text)
    res.send(response.jsonBody.reviews);
  }).catch(e => {
    console.log(e);
  });
})
// END YELP // BEGIN MONGO DB ROUTES 

// BOOKMARK ROUTES 
router.route("/bookmarks")
  .get(bookmarksController.findAll)
  .post(bookmarksController.create);

router
  .route("/bookmarks/:id")
  .get(bookmarksController.findById)
  .put(bookmarksController.update)
  .delete(bookmarksController.remove);
// USER ROUTES 
router.route("/users")
  .get(usersController.findAll)
  .post(usersController.create);
//  
router
  .route("/users/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Send every request to the React app
// Define any API routes before this runs
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
