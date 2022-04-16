const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }))
router
    .route("/")
    .get((req, res) => res.sendFile('/Users/daurkrut/Desktop/WEB(B)/Anime/Pages/naruto.html'));

module.exports = router;