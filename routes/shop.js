const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

// const { getHTMLText } = require("../helpers");
const { ENDPOINT } = require("../constants");

const router = express.Router();

router.get(ENDPOINT.HOME, (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { prods: adminData.products, docTitle: 'Shop | NodeJS' });
});

module.exports = router;
