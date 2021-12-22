const express = require("express");
const router = require("router");

router.use((req, res) => {
  res.locals.user = null;
  next();
});

router.get("/profile", (req, res) => {
  res.render("profile", { title: "내정보-NodeBird" });
});

router.get("/join", (req, res) => {
  res.render("join", { title: "회원가입- NodeBird" });
});
router.get("/", (req, res) => {
  res.render("main", {
    title: "NodeBird",
  });
});

module.exports = router;
