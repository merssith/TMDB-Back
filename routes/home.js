const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const { validateAdmin } = require("../middlewares/auth");

// GET HOME CARROUSEL
router.get("/carousel", validateAdmin, homeController.carousel);

// GET HOME CARROUSEL ACTIVE
router.get("/carousel/active", homeController.carouselActive);

// CREATE NEW CARROUSEL SLIDE
router.post("/carousel", validateAdmin, homeController.newCarouselSlide);

// DELETE CARROUSEL SLIDE
router.delete(
  "/carousel/:id",
  validateAdmin,
  homeController.deleteCarouselSlide
);

// UPDATE CARROUSEL SLIDE
router.put("/carousel/:id", validateAdmin, homeController.editCarouselSlide);

module.exports = router;
