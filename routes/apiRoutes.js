// const axios = require("axios"); - we do not need axios for yelp api calls as auth and request takes place through the yelp-fusion pckg
const router = require("express").Router();
const yelp = require('yelp-fusion');
const apiKey = 'tjWeCYoOxLdJP26PTWIdR0ww5r4Wyw0iI93pvORu_2o_j2pJBPAGZBpWFAPSfolo1WYhug7az9S78WiCKL5T9neJIUnRYmADfu6wsRdTRxPvz3BvJJqzwSAqDYy8WnYx';


const path = require("path");

const client = yelp.client(apiKey);


router.get('/hello', (req, res) => {
  let searchRequest = (req.query);


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


router.get('/business', (req, res) => {
  let bizRequest = req.query; 

client.business('guadalajara-taco-grill-palmdale').then(response => {
  res.send(response.jsonBody);
}).catch(e => {
  console.log(e);
});
});
// YELP REVIEWS END POINT CALL FROM BACK END ---->>>
router.get('/reviews', (req, res) => {

  client.reviews('guadalajara-taco-grill-palmdale').then(response => {
    console.log('reviews res=>', response.jsonBody.reviews.text)
    res.send(response.jsonBody.reviews);
  }).catch(e => {
    console.log(e);
  });
})

module.exports = router;

//OLD CODE


  // let searchRequest = {
  //   term: 'UCLA Bootcamp',
  //   location: 'los angeles, ca'
  // };
  // console.log("this is the search req", searchRequest)
  // console.log("this is the search req", req.query)