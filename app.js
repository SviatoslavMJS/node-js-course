const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const shopRouter = require("./routes/shop");
const { adminRouter } = require("./routes/admin");
const { ENDPOINT } = require("./constants");

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(shopRouter);
app.use(ENDPOINT.ADMIN, adminRouter);

app.use((req, res) => res.render("not-found", { docTitle: "Not found | NodeJS" }));

app.listen(3006);
