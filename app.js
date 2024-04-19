const express = require("express");
const bodyParser = require("body-parser");

const { getHTMLText } = require("./helpers");
const { ENDPOINT } = require("./constants");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(ENDPOINT.ADD_PRODUCT, (req, res, next) => {
  res.send(getHTMLText("Add product"));
});

app.post(ENDPOINT.PRODUCT, (req, res, next) => {
  console.log(req.body);
  res.redirect(ENDPOINT.HOME);
});

app.use(ENDPOINT.HOME, (req, res, next) => {
  res.send("<h1>Home page</h1>");
});

app.listen(3006);
