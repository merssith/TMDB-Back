const express = require("express");
const router = express.Router();

const users = require("./users");
const lists = require("./lists");
const movies = require("./movies");
const tvShows = require("./tvShows");

router.use("/users", users);
router.use("/lists", lists);
router.use("/movies", movies);
router.use("/tvShows", tvShows);

module.exports = router;
