const express = require("express");
const router = express.Router();
const path = require('path');
const User = require("../controllers/NewUserController");
router
    .route("/")
    .get((req,res) => {
        User.login(req,res)
    })
    .post((req,res) => {
        User.loginUser(req,res)
    })

module.exports = router;