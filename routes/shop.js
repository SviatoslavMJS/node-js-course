const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

// const { getHTMLText } = require("../helpers");
const { ENDPOINT } = require("../constants");

const router = express.Router();

router.get(ENDPOINT.HOME, (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
