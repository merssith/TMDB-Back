const S = require("sequelize");
const db = require("../config/db");

class IndexCarrousel extends S.Model {}

IndexCarrousel.init(
  {
    image: {
      type: S.STRING,
    },
    content: {
      type: S.TEXT,
    },
    active: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    position: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "index_carrousel" }
);

module.exports = IndexCarrousel;
