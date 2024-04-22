const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const { ENDPOINT } = require("./constants");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRouter);
app.use(ENDPOINT.ADMIN, adminRouter);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"))
);

app.listen(3006);
