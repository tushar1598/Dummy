const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController.js");

router.get("/", homeController.Home);
router.get("/sign-in", homeController.SignIn);
router.get("/sign-up", homeController.SignUP);
router.get("/profile", homeController.Profile);

module.exports = router;
