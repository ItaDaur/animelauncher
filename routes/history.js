const express = require("express");
const router = express.Router();
const path = require('path');
const {findAll} = require("../controllers/UserController");
router
    .route("/")
    .get((req, res) => findAll(req,res));
module.exports = router;