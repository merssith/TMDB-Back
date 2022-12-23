const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validateAuth, validateAdmin } = require("../middlewares/auth");
const formData = require("express-form-data");

//GET ALL USERS
router.get("/", userController.allUsers);

//REGISTER USER
router.post("/register", userController.registerUser);

//USER BY ID
router.get("/id/:id", userController.byUserId);

//SEARCH USER BY USERNAME OR MAIL
router.get("/search", userController.searchByUserNameOrEmail);

//LOGIN
router.post("/login", userController.loginUser);

//LOGOUT
router.post("/logout", userController.logoutUser);

//GET MY PROFILE
router.get("/me", validateAuth, userController.getMe);

//CHANGE MY USER AVATAR
router.put(
  "/avatar",
  validateAuth,
  formData.parse(),
  userController.updateUserAvatar
);

//UPDATE MY USER PROFILE
router.put("/updateProfile", validateAuth, userController.editUser);

//UPDATE AN USER
router.put("/updateUser/:id", validateAdmin, userController.editUserById);

//DELETE USER
router.delete("/delete/:id", validateAdmin, userController.deleteUser);

module.exports = router;
