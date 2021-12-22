const express = require("express");
// const router = require("router");
const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followerIdList = req.user
    ? req.user.Followings.map((f) => f.id)
    : [];
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
