const { validateToken } = require("../config/tokens");
const userService = require("../services/userService");

async function validateAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  req.user = await userService.getMe(user.id);

  next();
}

//VALIDATE THE ADMIN ROLE
async function validateAdmin(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);

  req.user = await userService.getMe(user.id);

  if (req.user.role === "User") {
    return res.sendStatus(401);
  } else {
    next();
  }
}

module.exports = { validateAuth, validateAdmin };
