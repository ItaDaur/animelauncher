const express = require("express");
const router = express.Router();
const path = require('path');
const UserController = require('../controllers/NewAnimeController')

router
    .route("/")
    .post((req,res) => {
        UserController.storeAnime(req,res)
    })

module.exports = router;