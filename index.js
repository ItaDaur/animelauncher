const express = require("express");
const app = express();
const port = 3001;

app.use("/", require("./routes/root"));
app.use("/naruto", require("./routes/naruto"));
app.use("/blackclover", require("./routes/blackclover"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

