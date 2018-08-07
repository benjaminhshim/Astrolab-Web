// const axios = require("axios");
const router = require("express").Router();
// const yelp = require('yelp-fusion');
// const apiKey = 'tjWeCYoOxLdJP26PTWIdR0ww5r4Wyw0iI93pvORu_2o_j2pJBPAGZBpWFAPSfolo1WYhug7az9S78WiCKL5T9neJIUnRYmADfu6wsRdTRxPvz3BvJJqzwSAqDYy8WnYx';
const bookmarksController = require("../controllers/bookmarksController");
const usersController = require("../controllers/usersController");

const path = require("path");

// BOOKMARK ROUTES 
router.route("/")
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
