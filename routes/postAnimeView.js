const express = require("express");
const router = express.Router();
const path = require('path');
const AnimeController = require('../controllers/NewAnimeController')

router
    .route("/")
    .get((req,res) => {
        AnimeController.getAnime(req,res)
    })

module.exports = router;