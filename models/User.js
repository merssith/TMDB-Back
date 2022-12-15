const S = require("sequelize");
const db = require("../config/db");
const List = require("./List");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    userName: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    avatar: {
      type: S.STRING,
      defaultValue:
        "https://res.cloudinary.com/dsdiadotw/image/upload/v1668696029/avatar_default_rgp6yr.png",
    },
    role: {
      type: S.STRING,
      defaultValue: "User",
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  user.lastName =
    user.lastName[0].toUpperCase() + user.lastName.slice(1).toLowerCase();
  user.name = user.name[0].toUpperCase() + user.name.slice(1).toLowerCase();
  return user.lastName && user.name;
});

User.List = User.hasMany(List);
module.exports = User;
