const express = require("express");
const router = express.Router();
const path = require('path');
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve('/Users/daurkrut/Desktop/WEB(B)/Anime/Pages/blackclover.html')));
module.exports = router;