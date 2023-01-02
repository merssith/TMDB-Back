const createUsers = require("./users.js");
const createLists = require("./lists.js");
const createCarousel = require("./carousel.js");

createUsers()
  .then(() => createLists())
  .then(() => createCarousel());
