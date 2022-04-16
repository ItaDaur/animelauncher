const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => res.sendFile('/Users/daurkrut/Desktop/WEB(B)/Anime/index.html'));
module.exports = router;