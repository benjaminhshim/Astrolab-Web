// const axios = require("axios");
const router = require("express").Router();
// const yelp = require('yelp-fusion');
// const apiKey = 'tjWeCYoOxLdJP26PTWIdR0ww5r4Wyw0iI93pvORu_2o_j2pJBPAGZBpWFAPSfolo1WYhug7az9S78WiCKL5T9neJIUnRYmADfu6wsRdTRxPvz3BvJJqzwSAqDYy8WnYx';
const layersController = require("../controllers/layersController");

const path = require("path");

// BOOKMARK ROUTES 
router.route("/")
  .get(layersController.findAll)
  .post(layersController.create);

router
  .route("/layers/:id")
  .get(layersController.findById)
  .put(layersController.update)
  .delete(layersController.remove);

// Send every request to the React app
// Define any API routes before this runs
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
