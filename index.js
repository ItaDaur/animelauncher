const express = require("express");
const app = express();
const port = 3001;
var favicon = require('serve-favicon');
var path = require('path');

app.use(favicon('/Users/daurkrut/Desktop/WEB(B)/Anime/pic/favicon/favicon.ico'));
app.use(express.static(path.join('/Users/daurkrut/Desktop/WEB(B)/Anime/pic', 'favicon')));


app.use(express.static('/Users/daurkrut/Desktop/WEB(B)/Anime'));



app.use("/", require("./routes/root"));
app.use("/naruto", require("./routes/naruto"));
app.use("/blackclover", require("./routes/blackclover"));

app.post('/', ((req, res) => {
    let num1 = Number(req.body.main.nav.number1);
    let num2 = Number(req.body.main.nav.number2);
    res.send("result " + (num1+num2)); }));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

