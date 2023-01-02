const sequelize = require("sequelize");
const Op = sequelize.Op;
const { User } = require("../models");
const imageService = require("./imageService");

exports.allUsers = async (page) => {
  let skipUsers = page;
  skipUsers >= 1 ? (skipUsers -= 1) : null;
  let limit = 8;

  const usersRequest = await User.findAndCountAll({
    order: [["userName", "ASC"]],
    include: [
      {
        association: User.List,
      },
    ],
    attributes: {
      exclude: ["password", "updatedAt", "createdAt", "role", "salt"],
    },
    limit: limit,
    offset: page ? skipUsers * limit : 0,
    distinct: true,
  });
  if (!usersRequest.rows.length) throw 404;
  return { usersRequest, page, limit };
};

exports.registerUser = (user) => {
  if (Object.keys(user).length === 0) return 400;
  return User.create(user);
};

exports.byUserId = async (id) => {
  if (isNaN(id)) throw 400;
  const user = await User.findByPk(id, {
    include: [
      {
        association: User.List,
      },
    ],
    attributes: {
      exclude: ["password", "updatedAt", "createdAt", "role", "salt"],
    },
  });
  if (!user) throw 404;
  return user;
};

exports.searchByUserNameOrEmail = async (queryString, filter) => {
  if (!queryString) throw 400;
  if (!filter) throw 400;
  let user = "";
  if (filter === "username") {
    user = await User.findOne({
      where: {
        userName: {
          [sequelize.Op.iLike]: queryString,
        },
      },
      include: [
        {
          association: User.List,
        },
      ],
      attributes: {
        exclude: ["password", "updatedAt", "createdAt", "role", "salt"],
      },
    });
    if (!user) throw 404;
  } else {
    user = await User.findOne({
      where: {
        email: {
          [sequelize.Op.iLike]: queryString,
        },
      },
      include: [
        {
          association: User.List,
        },
      ],
      attributes: {
        exclude: ["password", "updatedAt", "createdAt", "role", "salt"],
      },
    });
    if (!user) throw 404;
  }
  return user;
};

exports.loginUser = async (userName, password) => {
  if (Object.keys(userName).length === 0) return 400;
  if (Object.keys(password).length === 0) return 400;
  userName = userName.toLowerCase();
  const user = await User.findOne({ where: { userName } });
  if (!user) throw 404;
  const validate = await user.validatePassword(password);
  if (!validate) throw 401;
  return {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    avatar: user.avatar,
  };
};

exports.getMe = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw 404;
  return {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    avatar: user.avatar,
    role: user.role,
    age: user.age,
    moviePreferences: user.moviePreferences,
    tvPreferences: user.tvPreferences,
  };
};

exports.updateUserAvatar = async (id, avatar) => {
  const user = await User.findByPk(id);
  if (!user) throw 404;
  try {
    const uploadedAvatar = await imageService.uploadAvatar(avatar);
    const updatedUser = await user.update({
      avatar: uploadedAvatar,
    });
    return updatedUser;
  } catch {
    throw 400;
  }
};

exports.editUser = async (id, body) => {
  if (isNaN(id)) throw 400;
  const user = await User.findByPk(id);
  if (!user) throw 404;
  if (Object.keys(body).length === 0) return 400;
  let editUser = {
    name: body.name,
    lastName: body.lastName,
    moviePreferences: body.moviePreferences,
    tvPreferences: body.tvPreferences,
    age: body.age,
  };
  await user.update(editUser);
  return user;
};

exports.editUserById = async (id, body, thisUser) => {
  if (isNaN(id)) throw 400;
  const user = await User.findByPk(id);
  if (!user) throw 404;
  if (Object.keys(body).length === 0) throw 400;
  if ((user.role === "SuperAdmin") & (thisUser.role != "SuperAdmin")) {
    throw 401;
  }
  let editUser = {
    name: body.name,
    lastName: body.lastName,
    userName: body.userName,
    email: body.email,
    role: body.role,
    age: body.age,
    moviePreferences: body.moviePreferences,
    tvPreferences: body.tvPreferences,
  };
  await user.update(editUser);
  return user;
};

exports.deleteUser = async (id, thisUser) => {
  if (isNaN(id)) throw 400;
  const user = await User.findByPk(id);
  if (!user) throw 404;
  if ((user.role === "SuperAdmin") & (thisUser.role != "SuperAdmin")) {
    throw 401;
  }
  if (user.id === thisUser.id) {
    throw 400;
  }
  return User.destroy({ where: { id } });
};
