const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./apiRoutes");
const userAPIRoutes = require("./api");

// router.use("/", apiRoutes);
router.use("/api", userAPIRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})
module.exports = router;
