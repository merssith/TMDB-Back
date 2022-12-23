const createUsers = require("./users.js");
const createLists = require("./lists.js");
const createCarrousel = require("./carrousel.js");

createUsers()
  .then(() => createLists())
  .then(() => createCarrousel());
