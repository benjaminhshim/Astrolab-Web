// const axios = require("axios"); - we do not need axios for yelp api calls as auth and request takes place through the yelp-fusion pckg
const router = require("express").Router();
const yelp = require('yelp-fusion');
const apiKey = 'tjWeCYoOxLdJP26PTWIdR0ww5r4Wyw0iI93pvORu_2o_j2pJBPAGZBpWFAPSfolo1WYhug7az9S78WiCKL5T9neJIUnRYmADfu6wsRdTRxPvz3BvJJqzwSAqDYy8WnYx';
// ***** TODO: HIDE THE API KEY AS AN ENV VARIABLE SO IT ISNT EXPOSED *************
const bookmarksController = require("../controllers/bookmarksController"); // this probably will be moved - testing db routes
const path = require("path");



const client = yelp.client(apiKey);


router.get('/hello', (req, res) => {
  let searchRequest = (req.query);
  // let searchRequest = {
  //   term: 'UCLA Bootcamp',
  //   location: 'los angeles, ca'
  // };
  console.log("this is the search req", searchRequest)
  console.log("this is the search req", req.query)


  // 1st YELP CALL FROM BACK END ---->>>

  client.search(searchRequest).then(response => {
    console.log("express", response.jsonBody.businesses)
    console.log("additional yelp stuff -->", response.jsonBody)
    res.send(response.jsonBody.businesses)
  }).catch(e => {
    console.log(e);
  });
});
// YELP REVIEWS END POINT CALL FROM BACK END ---->>>
router.get('/reviews', (req, res) => {

  client.reviews('jennifer-k-oliveira-dds-santa-monica').then(response => {
    console.log('reviews res=>', response.jsonBody.reviews.text)
    res.send(response.jsonBody.reviews);
  }).catch(e => {
    console.log(e);
  });
})
// // END YELP // BEGIN MONGO DB ROUTES (back end)

// // BOOKMARK TABLE CRUD ROUTES 
// router.route("/bookmarks")
//   .get(bookmarksController.findAll)
//   .post(bookmarksController.create);
// router
//   .route("/bookmarks/:id")
//   .get(bookmarksController.findById)
//   .put(bookmarksController.update)
//   .delete(bookmarksController.remove);

// // USER TABLE CRUD ROUTES 
// router.route("/users")
//   .get(usersController.findAll)
//   .post(usersController.create);
// //  
// route
//   .route("/users/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

// Send every request to the React app
// ***** Define any API routes before this runs
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
