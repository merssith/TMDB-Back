const express = require("express");
const router = express.Router();
const { validateAuth, validateAdmin } = require("../middlewares/auth");
const listController = require("../controllers/listController");

// GET ALL LISTS
router.get("/all", validateAdmin, listController.allLists);

// GET ALL PUBLIC LISTS
router.get("/", listController.allPublicLists);

// GET MY LISTS
router.get("/myLists", validateAuth, listController.myLists);

// GET A LIST INFORMATION
router.get("/list/:id", listController.listInformation);

// CREATE A LIST
router.post("/create", validateAuth, listController.createList);

// EDIT MY LIST
router.put("/edit/:id", validateAuth, listController.editMyList);

// DELETE MY LIST
router.delete("/delete/:id", validateAuth, listController.deleteMyList);

// DELETE A LIST
router.delete("/adminDelete/:id", validateAdmin, listController.deleteList);

module.exports = router;
