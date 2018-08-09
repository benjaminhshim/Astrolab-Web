// const axios = require("axios"); - we do not need axios for yelp api calls as auth and request takes place through the yelp-fusion pckg
const router = require("express").Router();
const yelp = require('yelp-fusion');
const apiKey = 'tjWeCYoOxLdJP26PTWIdR0ww5r4Wyw0iI93pvORu_2o_j2pJBPAGZBpWFAPSfolo1WYhug7az9S78WiCKL5T9neJIUnRYmADfu6wsRdTRxPvz3BvJJqzwSAqDYy8WnYx';
const bookmarksController = require("../controllers/bookmarksController");
const userController = require("../controllers/userController");


const path = require("path");



const client = yelp.client(apiKey);


router.get('/hello', (req, res) => {
  let searchRequest = (req.query);
  // let searchRequest = {
  //   term: 'UCLA Bootcamp',
  //   location: 'los angeles, ca'
  // };
  // console.log("this is the search req", searchRequest)
  // console.log("this is the search req", req.query)


  // 1st YELP CALL FROM BACK END ---->>>

  client.search(searchRequest).then(response => {

    // console.log("express", response.jsonBody.businesses)
    console.log("additional yelp stuff ")
    // , response.jsonBody)


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


module.exports = router;
