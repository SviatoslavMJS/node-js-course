const express = require("express");
const bodyParser = require("body-parser");

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRouter);
app.use(adminRouter);

app.use((req, res) => res.status(404).send("<h1>Page not found</h1>"));

app.listen(3006);
