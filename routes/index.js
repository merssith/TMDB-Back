const express = require("express");
const router = express.Router();

const users = require("./users");
const lists = require("./lists");

router.use("/users", users);
router.use("/lists", lists);

module.exports = router;
