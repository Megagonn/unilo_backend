const express = require('express');
const router = express.Router();

const userController = require("../controller/user.controller")

router.post("/signup", userController.signup);
router.get("/get", (req, res)=>{
    console.log("i got called");
    res.send({name: "name", age: 25})
})

module.exports = router;