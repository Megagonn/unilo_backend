const express = require('express');
const router = express.Router();

const userController = require("../controller/company.controller")

router.post("/signup", userController.signup);
router.put("/update", userController.update);
router.post("/signin", userController.signin);

module.exports = router;