const express = require("express");
const app = express();
let port = process.env.PORT || 3002;
const ejs = require("ejs");
const swaggerUI = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')
var path = require('path');
const methodOverride = require('method-override')
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
if (port == null || port == "") {
    port = 3002;
}

const validateMiddleWare = require('./middleware/validationMiddleware')
const expressSession = require('express-session')
const flash = require('connect-flash')

app.use(expressSession({
    secret: 'keyboard cat'
}))

global.loggedIn = null;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(express.static(path.resolve("public")));
app.use(express.json())
app.use(fileUpload())
app.use('/animes/store',validateMiddleWare)
app.use(flash())
app.use("*",(req,res,next)=>{
    loggedIn = req.session.userId
    next()
})

// Needed Controllers
const AnimeController = require('./controllers/NewAnimeController')

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
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
app.use("/logIn", require("./routes/LogIn"));
app.use("/registration", require("./routes/registration"));
app.use("/history", require("./routes/history"));
app.use("/deletePage", require("./routes/deletePage"));
app.use("/anime/new", require('./routes/newPost'))
app.use("/animes/store", require("./routes/AnimesStore"))
app.get('/anime/:id', AnimeController.getAnime)
app.use('/logout', require('./routes/logout'))

app.use((req,res) => {
    res.render('notfound')
})

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

