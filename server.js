const express = require("express");
const app = express();
let port = process.env.PORT;
const ejs = require("ejs");
var path = require('path');
const https = require('https');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
if (port == null || port == "") {
    port = 3001;
}

app.use(express.static(path.resolve("public")));

app.use("/", require("./routes/root"));
app.use("/naruto", require("./routes/naruto"));
app.use("/blackclover", require("./routes/blackclover"));
app.use("/logIn", require("./routes/LogIn"));
app.use("/neverland", require("./routes/neverland"));
app.use("/bleach", require("./routes/bleach"));
app.use("/demonSlayer", require("./routes/demonSlayer"));
app.use("/hunter", require("./routes/hunter"));
app.use("/gintama", require("./routes/gintama"));
app.use("/heroAcademia", require("./routes/heroAcademia"));


app.post("/",((req,res) => {
    let name = req.body.animeName;
    let url = "https://anime-facts-rest-api.herokuapp.com/api/v1/" + name;
    https.get(url, function (response) {
        response.on('data', data => {
            let a = JSON.parse(data);
            let mainChar = a.data[0].fact;
            res.render(path.resolve("index.ejs"), {
                interFact:mainChar
            });
        })
    });
}));


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

