const express = require("express");
const router = express.Router();
const path = require("path");
const https = require("https");
const UserController = require('../controllers/NewAnimeController')

router
    .route("/")
    .get((req, res) => {
        UserController.home(req,res)
    })
module.exports = router;