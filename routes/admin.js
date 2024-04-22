const express = require("express");

const { getHTMLText } = require("../helpers");
const { ENDPOINT } = require("../constants");

const router = express.Router();

router.get(ENDPOINT.ADD_PRODUCT, (req, res, next) => {
  res.send(getHTMLText("Add product"));
});

router.post(ENDPOINT.PRODUCT, (req, res, next) => {
  console.log(req.body);
  res.redirect(ENDPOINT.HOME);
});

module.exports = router;
