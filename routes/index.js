const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// Book routes
router.use("/", apiRoutes);

module.exports = router;
