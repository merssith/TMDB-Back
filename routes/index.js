const express = require("express");
const router = express.Router();

const users = require("./users");
const lists = require("./lists");
const movies = require("./movies");
const tvShows = require("./tvShows");
const genres = require("./genres");
const home = require("./home");
const recommendations = require("./recommendations");

router.use("/users", users);
router.use("/lists", lists);
router.use("/movies", movies);
router.use("/tvShows", tvShows);
router.use("/genres", genres);
router.use("/home", home);
router.use("/recommendations", recommendations);

module.exports = router;
