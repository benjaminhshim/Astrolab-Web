const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const bookmarkRoutes = require("./bookmarkRoutes");

// YELP routes
router.use("/", apiRoutes);
router.use("/bookmark", bookmarkRoutes)

module.exports = router;
