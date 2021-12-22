const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
