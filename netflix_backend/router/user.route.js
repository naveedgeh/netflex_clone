const express = require("express");
const user = require("../controller/user.controller");
const Router = express.Router();

Router.post("/signup", user.userCreate);

module.exports = Router;
