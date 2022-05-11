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
    port = 3002;
}

app.use(express.static(path.resolve("public")));

const UserRoute = require('./routes/UserRoute')
app.use('/registration/user',UserRoute)

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");
const {destroy, findAll, findOne, create} = require("./controllers/UserController");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



app.use("/", require("./routes/root"));
app.use("/naruto", require("./routes/naruto"));
app.use("/blackclover", require("./routes/blackclover"));
app.use("/logIn", require("./routes/LogIn"));
app.use("/registration", require("./routes/registration"));
app.use("/history", require("./routes/history"));
app.use("/neverland", require("./routes/neverland"));
app.use("/bleach", require("./routes/bleach"));
app.use("/demonSlayer", require("./routes/demonSlayer"));
app.use("/hunter", require("./routes/hunter"));
app.use("/gintama", require("./routes/gintama"));
app.use("/heroAcademia", require("./routes/heroAcademia"));

app.post('/registration', (req, res) => {
    create(req,res)
});

app.get('/history', (req, res) => {
    findAll(req, res)
});



app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

