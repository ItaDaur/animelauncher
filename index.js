const express = require("express");
const app = express();
const port = 3001;
var path = require('path');
const https = require('https');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname)));

app.use("/", require("./routes/root"));
app.use("/naruto", require("./routes/naruto"));
app.use("/blackclover", require("./routes/blackclover"));
app.use("/logIn", require("./routes/LogIn"));
app.use("/neverland", require("./routes/neverland"))
app.use("/bleach", require("./routes/bleach"))

app.post("/",((req,res) => {
    let name = req.body.animeName;
    let url = "https://anime-facts-rest-api.herokuapp.com/api/v1/" + name;
    https.get(url, function (response) {
        response.on('data', data => {
            let a = JSON.parse(data);
            let mainChar = a.data[0].fact;
            res.send("Interesting facts about " + name + " is " + mainChar);
        })
    });
}));


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

