const express = require("express");
const router = express.Router();
const path = require('path');
const {destroy} = require("../controllers/UserController");
router
    .route("/")
    .get((req, res) => res.render(path.resolve('views/deletePage.ejs')))
    .post((req,res) => destroy(req,res));
module.exports = router;