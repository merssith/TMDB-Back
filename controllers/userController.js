const userService = require("../services/userService");
const { generateToken } = require("../config/tokens");
const userDto = require("../dto/userDto");

exports.allUsers = (req, res) => {
  let { page } = req.query;
  userService
    .allUsers(page)
    .then((users) => res.status(200).send(userDto.parsePagingData(users)))
    .catch((err) => res.status(500).send(err));
};

exports.registerUser = (req, res) => {
  const user = req.body;
  userService
    .registerUser(user)
    .then((newUser) => res.status(201).send(newUser))
    .catch((err) => res.status(500).send(err));
};

exports.byUserId = (req, res) => {
  let userId = req.params.id;
  userService
    .byUserId(userId)
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(500).send(err));
};

exports.searchByUserNameOrEmail = (req, res) => {
  let { email, username } = req.query;
  let queryString = email ? email : username;
  let filter = email ? "email" : "username";
  userService
    .searchByUserNameOrEmail(queryString, filter)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
};

exports.loginUser = async (req, res) => {
  const { userName, password } = req.body;
  userService
    .loginUser(userName, password)
    .then((payload) => {
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    })
    .catch((err) => res.status(500).send(err));
};

exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

exports.getMe = (req, res) => {
  res.send(req.user);
};

exports.updateUserAvatar = (req, res) => {
  const id = req.user.id;
  const avatar = req.files.avatar.path;
  userService
    .updateUserAvatar(id, avatar)
    .then((updatedUser) => res.status(202).send(updatedUser))
    .catch((err) => res.status(500).send(err));
};

exports.editUser = (req, res) => {
  const id = req.user.id;
  userService
    .editUser(id, req.body)
    .then((updatedUser) => res.status(202).send(updatedUser))
    .catch((err) => res.status(500).send(err));
};

exports.editUserById = (req, res) => {
  const id = req.params.id;
  const thisUser = req.user;
  userService
    .editUserById(id, req.body, thisUser)
    .then((updatedUser) => res.status(202).send(updatedUser))
    .catch((err) => res.status(500).send(err));
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const thisUser = req.user;
  userService
    .deleteUser(id, thisUser)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(500).send(err));
};
