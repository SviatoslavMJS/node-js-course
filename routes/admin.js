const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const { ENDPOINT } = require("../constants");
// const { getHTMLText } = require("../helpers");

const router = express.Router();

// /admin/add-product => GET
router.get(ENDPOINT.ADD_PRODUCT, (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post(ENDPOINT.ADD_PRODUCT, (req, res, next) => {
  console.log(req.body);
  res.redirect(ENDPOINT.HOME);
});

module.exports = router;
