const express = require("express");
const router = express.Router();
const List = require("../models/List");

//GET ALL
router.get("/", (req, res) => {
  List.findAll().then((lists) => res.json(lists));
});

module.exports = router;
