const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const List = require("./List");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

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
    salt: {
      type: S.STRING,
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
    moviePreferences: {
      type: S.ARRAY(S.JSON),
      defaultValue: null,
    },
    tvPreferences: {
      type: S.ARRAY(S.JSON),
      defaultValue: null,
    },
    age: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  user.userName = user.userName.toLowerCase();
  return user.userName;
});

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();

  user.salt = salt;

  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

User.List = User.hasMany(List);
module.exports = User;
