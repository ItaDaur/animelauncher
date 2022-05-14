const express = require("express");
const router = express.Router();
const path = require("path");
const https = require("https");

router
    .route("/")
    .get((req, res) => res.render(path.resolve('index.ejs'), {
        interFact:"Empty",
        myData:"0"
    }));
module.exports = router;