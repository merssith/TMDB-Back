const express = require("express");
const router = express.Router();
const recommendationsController = require("../controllers/recommendationsController");
const { validateAuth } = require("../middlewares/auth");

// SURPRISE-ME
router.get("/surpriseMe", recommendationsController.surpriseMe);

// RECOMMENDATION MOVIE BY ALL USER PREFERENCES
router.get(
  "/recommendationMovieByPreferences",
  validateAuth,
  recommendationsController.recommendationMovieByPreferences
);

// RECOMMENDATION TV BY ALL USER PREFERENCES
router.get(
  "/recommendationTvByPreferences",
  validateAuth,
  recommendationsController.recommendationTvByPreferences
);

// RECOMMENDATION MOVIE BY ONE USER PREFERENCE
router.get(
  "/recommendationByPreferences/movie/:id",
  validateAuth,
  recommendationsController.recommendationMovieOnePreference
);

// RECOMMENDATION TV SHOW BY ONE USER PREFERENCE
router.get(
  "/recommendationByPreferences/tv/:id",
  validateAuth,
  recommendationsController.recommendationTvOnePreference
);

module.exports = router;
