const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

// GET TOP RATED MOVIES
router.get("/", moviesController.topMovies);

// SEARCH BY QUERY STRING
router.get("/search", moviesController.searchMovies);

// MOVIE DETAILS
router.get("/details/:id", moviesController.seeMovieDetails);

module.exports = router;
