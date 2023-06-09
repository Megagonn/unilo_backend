const express = require('express');
const router = express.Router();

const userController = require("../controller/user.controller")

router.post("/signup", userController.signup);
router.put("/addname", userController.addName);
router.put("/updateprofile", userController.updateProfile);
router.get("/get", userController.getall);

module.exports = router;