const express = require("express");
const router = express.Router();
const path = require('path');
const {insertNumbers} = require("../controllers/DesignController");
router
    .route("/")
    .get((req, res) => res.render(path.resolve('views/designRating.ejs')))
    .post((req,res) => insertNumbers(req,res))
module.exports = router;