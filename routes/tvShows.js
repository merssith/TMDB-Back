const express = require("express");
const router = express.Router();
const tvShowsController = require("../controllers/tvShowsController");

// GET TOP RATED TV SHOWS
router.get("/", tvShowsController.topTvShows);

// SEARCH BY QUERY STRING
router.get("/search", tvShowsController.searchTvShows);

// TV SHOW DETAILS
router.get("/details/:id", tvShowsController.seeTvShowDetails);

module.exports = router;
