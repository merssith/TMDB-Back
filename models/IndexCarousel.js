const S = require("sequelize");
const db = require("../config/db");

class IndexCarousel extends S.Model {}

IndexCarousel.init(
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
  { sequelize: db, modelName: "index_carousel" }
);

module.exports = IndexCarousel;
