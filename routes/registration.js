const express = require("express");
const router = express.Router();
const path = require('path');
const UserController = require("../controllers/NewUserController");
router
    .route("/")
    .get((req, res) => UserController.newUser(req,res))
    .post((req,res) => UserController.storeUser(req,res))

module.exports = router;