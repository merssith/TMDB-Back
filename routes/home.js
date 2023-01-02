const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const { validateAdmin } = require("../middlewares/auth");

// GET HOME CAROUSEL
router.get("/carousel", validateAdmin, homeController.carousel);

// GET HOME CAROUSEL ACTIVE
router.get("/carousel/active", homeController.carouselActive);

// CREATE NEW CAROUSEL SLIDE
router.post("/carousel", validateAdmin, homeController.newCarouselSlide);

// DELETE CAROUSEL SLIDE
router.delete(
  "/carousel/:id",
  validateAdmin,
  homeController.deleteCarouselSlide
);

// UPDATE CAROUSEL SLIDE
router.put("/carousel/:id", validateAdmin, homeController.editCarouselSlide);

// CAROUSEL SLIDE BY ID
router.get(
  "/carousel/id/:id",
  validateAdmin,
  homeController.getCarouselSlideById
);

module.exports = router;
