const express = require("express");

const { getHTMLText } = require("../helpers");
const { ENDPOINT } = require("../constants");

const router = express.Router();

router.get(ENDPOINT.HOME, (req, res, next) => {
  res.send(getHTMLText("Home page", "<h1>Home page</h1>"));
});

module.exports = router;
