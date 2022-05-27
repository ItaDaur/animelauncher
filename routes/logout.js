const express = require("express");
const router = express.Router();
const path = require('path');
const User = require("../controllers/NewUserController");
router
    .route("/")
    .get((req, res) => {
        User.logout(req,res);
    })

module.exports = router;