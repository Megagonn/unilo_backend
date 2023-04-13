const express = require('express');
const routes = express.Router();

const userController = require("../controller/user.controller")

routes.post("/signup", userController.signup);
routes.get("/get", (req, res)=>{
    res.send({name: "name", age: 25})
})

module.exports = routes;