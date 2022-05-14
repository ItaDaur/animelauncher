const express = require("express");
const router = express.Router();
const path = require('path');
const {findAll, findOne} = require("../controllers/UserController");
router
    .route("/")
    .get((req, res) => {
        res.render(path.resolve('views/LogIn.ejs'));
    })
    .post((req,res) => {
        findOne(req,res)
    })

module.exports = router;