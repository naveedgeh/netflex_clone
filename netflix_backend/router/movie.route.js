const express = require("express");
const movie = require("../controller/movie.controller");
const multer = require("multer");
const Router = express.Router();
const upload = multer({ dest: "uploads/" });
Router.route("create-movie").post(upload.single("movie"), movie.movieCreate);

module.exports = Router;
