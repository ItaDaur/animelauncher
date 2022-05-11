const express = require("express");
const router = express.Router();
const path = require('path');
const {create} = require("../controllers/UserController");
router
    .route("/")
    .get((req, res) => res.render(path.resolve('views/registration.ejs')))
    .post((req,res) => create(req,res))

module.exports = router;