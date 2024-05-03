const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

// const { getHTMLText } = require("../helpers");
const { ENDPOINT } = require("../constants");

const router = express.Router();

router.get(ENDPOINT.HOME, (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const prods = adminData.products;
  res.render("shop", {
    prods,
    path: "/",
    activeShop: true,
    productCSS: true,
    docTitle: "Shop | NodeJS",
    hasProducts: prods.length > 0,
  });
});

module.exports = router;
