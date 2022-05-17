const express = require("express");
const router = express.Router();
const path = require('path');
const {findAll, logIn} = require("../controllers/UserController");
router
    .route("/")
    .get((req, res) => {
        res.render(path.resolve('views/LogIn.ejs'));
    })
    .post((req,res) => {
        logIn(req,res)
    })

module.exports = router;