const sequelize = require("sequelize");
const Op = sequelize.Op;
const { IndexCarousel } = require("../models");

exports.carousel = async () => {
  const carousel = await IndexCarousel.findAll({
    attributes: {
      exclude: ["updatedAt", "createdAt"],
    },
  });
  if (!carousel.length) throw 404;
  return carousel;
};

exports.carouselActive = async () => {
  const carouselActive = await IndexCarousel.findAll({
    attributes: {
      exclude: ["updatedAt", "createdAt"],
    },
    where: [
      {
        active: true,
      },
    ],
  });
  if (!carouselActive.length) throw 404;
  return carouselActive;
};

exports.newCarouselSlide = async (slide) => {
  if (Object.keys(slide).length === 0) throw 400;
  const createCarouselSlide = await IndexCarousel.create(slide);
  return createCarouselSlide;
};

exports.deleteCarouselSlide = async (id) => {
  if (isNaN(id)) throw 400;
  const slide = await IndexCarousel.findByPk(id);
  if (!slide) throw 404;
  return IndexCarousel.destroy({ where: { id } });
};

exports.editCarouselSlide = async (modifiedSlide, id) => {
  if (isNaN(id)) throw 400;
  const slide = await IndexCarousel.findByPk(id);
  if (!slide) throw 404;
  if (Object.keys(modifiedSlide).length === 0) return 400;
  const editedSlide = await slide.update(modifiedSlide);
  return editedSlide;
};
