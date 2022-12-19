const express = require("express");
const router = express.Router();
const genresController = require("../controllers/genresController");

// GET MOVIES GENRES
router.get("/movies", genresController.moviesGenres);

// GET TV SHOWS GENRES
router.get("/tvSHows", genresController.tvShowsGenres);

module.exports = router;
