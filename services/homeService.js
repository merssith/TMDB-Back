const sequelize = require("sequelize");
const Op = sequelize.Op;
const { IndexCarousel } = require("../models");
const moviesService = require("./moviesService");
const tvShowsService = require("./tvShowsService");

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
  if (slide.movieId) {
    let movie = await moviesService.seeMovieDetails(slide.movieId);
    if (!movie) throw 404;
    let movieSlide = {
      title: movie.title,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
        movie.poster_path,
      content: movie.overview,
    };
    return await IndexCarousel.create(movieSlide);
  } else if (slide.tvShowId) {
    let tvShow = await tvShowsService.seeTvShowDetails(slide.tvShowId);
    if (!tvShow) throw 404;
    let tvShowSlide = {
      title: tvShow.name,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
        tvShow.poster_path,
      content: tvShow.overview,
    };
    return await IndexCarousel.create(tvShowSlide);
  } else {
    return await IndexCarousel.create(slide);
  }
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
