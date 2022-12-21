const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const { validateAdmin } = require("../middlewares/auth");

// GET HOME CARROUSEL
router.get("/carrousel", validateAdmin, homeController.carrousel);

// GET HOME CARROUSEL ACTIVE
router.get("/carrousel/active", homeController.carrouselActive);

// CREATE NEW CARROUSEL SLIDE
router.post("/carrousel", validateAdmin, homeController.newCarrouselSlide);

// DELETE CARROUSEL SLIDE
router.delete(
  "/carrousel/:id",
  validateAdmin,
  homeController.deleteCarrouselSlide
);

// UPDATE CARROUSEL SLIDE
router.put("/carrousel/:id", validateAdmin, homeController.editCarrouselSlide);

module.exports = router;
