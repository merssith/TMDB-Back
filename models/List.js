const S = require("sequelize");
const db = require("../config/db");

class List extends S.Model {}

List.init(
  {
    name: {
      type: S.STRING,
      defaultValue: "My Favourites",
    },
    content: {
      type: S.ARRAY(S.JSON),
      defaultValue: null,
    },
    public: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: "list" }
);

module.exports = List;
