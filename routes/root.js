const express = require("express");
const router = express.Router();
const path = require("path");
const https = require("https");

router
    .route("/")
    .get((req, res) => res.render(path.resolve('index.ejs'), {
        interFact:"Empty"
    }))
    // .post((req,res) => {
    //     let name = req.body.animeName;
    //     let url = "https://anime-facts-rest-api.herokuapp.com/api/v1/" + name;
    //     https.get(url, function (response) {
    //         response.on('data', data => {
    //             let a = JSON.parse(data);
    //             let mainChar = a.data[0].fact;
    //             res.render(path.resolve('index.ejs'), {
    //                 fact:mainChar
    //             });
    //         })
    //     });
    // });
module.exports = router;