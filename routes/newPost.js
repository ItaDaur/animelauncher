const express = require("express");
const router = express.Router();
const path = require('path');
const UserController = require('../controllers/NewAnimeController')

router
    .route("/")
    .get((req, res) => {
        UserController.newAnime(req, res)
    });

module.exports = router;