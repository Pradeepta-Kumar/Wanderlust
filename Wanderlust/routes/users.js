const express = require("express");
const router = express.Router({mergeParams: true});
const User = require("../models/users.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const {signupForm, signup, loginForm, login, logout} = require("../controller/users.js");

router.get("/signup", signupForm);
router.post("/signup", wrapAsync(signup));

router.get("/login", loginForm);
router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect: "login", failureFlash: true,}), login);

router.get("/logout", logout);

module.exports = router;