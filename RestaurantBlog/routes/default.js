const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
  // const htmlFilePath = path.join(__dirname, "views", "index.html");
  // res.sendFile(htmlFilePath);
});

router.get("/about", function (req, res) {
  res.render("about");

  // const htmlFilePath = path.join(__dirname, "views", "about.html");
  // res.sendFile(htmlFilePath);
});

module.exports = router;