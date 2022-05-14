const express = require("express");
const app = express();
let port = process.env.PORT || 3002;
const ejs = require("ejs");
var path = require('path');
const https = require('https');
const methodOverride = require('method-override')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
if (port == null || port == "") {
    port = 3002;
}

app.use(express.static(path.resolve("public")));

const UserRoute = require('./routes/UserRoute')
app.use('/user',UserRoute)

const DesignModel = require('./routes/DesignRoute')
const {router} = require("express/lib/application");
app.use('/design', DesignModel)
const {insertNumbers} = require('./controllers/DesignController')

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
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
app.use("/deletePage", require("./routes/deletePage"));
app.use("/designRating", require("./routes/designRating"))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

