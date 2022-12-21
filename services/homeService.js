const sequelize = require("sequelize");
const Op = sequelize.Op;
const { IndexCarrousel } = require("../models");

exports.carrousel = async () => {
  const carrousel = await IndexCarrousel.findAll({
    attributes: {
      exclude: ["updatedAt", "createdAt"],
    },
  });
  if (!carrousel.length) throw 404;
  return carrousel;
};

exports.carrouselActive = async () => {
  const carrouselActive = await IndexCarrousel.findAll({
    attributes: {
      exclude: ["updatedAt", "createdAt"],
    },
    where: [
      {
        active: true,
      },
    ],
  });
  if (!carrouselActive.length) throw 404;
  return carrouselActive;
};

exports.newCarrouselSlide = async (slide) => {
  if (Object.keys(slide).length === 0) throw 400;
  const createCarrouselSlide = await IndexCarrousel.create(slide);
  return createCarrouselSlide;
};

exports.deleteCarrouselSlide = async (id) => {
  if (isNaN(id)) throw 400;
  const slide = await IndexCarrousel.findByPk(id);
  if (!slide) throw 404;
  return IndexCarrousel.destroy({ where: { id } });
};

exports.editCarrouselSlide = async (modifiedSlide, id) => {
  if (isNaN(id)) throw 400;
  const slide = await IndexCarrousel.findByPk(id);
  if (!slide) throw 404;
  if (Object.keys(modifiedSlide).length === 0) return 400;
  const editedSlide = await slide.update(modifiedSlide);
  return editedSlide;
};
