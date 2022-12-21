const express = require("express");
const router = express.Router();
const recommendationsController = require("../controllers/recommendationsController");
const { validateAuth } = require("../middlewares/auth");

// SURPRISE-ME
router.get("/surpriseMe", recommendationsController.surpriseMe);

// RECOMMENDATION BY PREFERENCES

module.exports = router;
