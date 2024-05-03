const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const { ENDPOINT } = require("../constants");
// const { getHTMLText } = require("../helpers");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get(ENDPOINT.ADD_PRODUCT, (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    docTitle: "Add product | NodeJS",
  });
});

// /admin/add-product => POST
router.post(ENDPOINT.ADD_PRODUCT, (req, res, next) => {
  products.push(req.body);
  res.redirect(ENDPOINT.HOME);
});

module.exports = { adminRouter: router, products };
