const express = require('express');
const routes = express.Router();

const userController = require("../controller/user.controller")

routes.post("/signup", userController.signup);


module.exports = routes;