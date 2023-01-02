const homeService = require("../services/homeService.js");

exports.carousel = (req, res) => {
  homeService
    .carousel()
    .then((carrousels) => res.status(200).send(carrousels))
    .catch((err) => res.status(500).send(err));
};

exports.carouselActive = (req, res) => {
  homeService
    .carouselActive()
    .then((carrousels) => res.status(200).send(carrousels))
    .catch((err) => res.status(500).send(err));
};

exports.newCarouselSlide = (req, res) => {
  const slide = req.body;
  homeService
    .newCarouselSlide(slide)
    .then((newSlide) => res.status(201).send(newSlide))
    .catch((err) => res.status(500).send(err));
};

exports.deleteCarouselSlide = (req, res) => {
  const id = req.params.id;
  homeService
    .deleteCarouselSlide(id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(500).send(err));
};

exports.editCarouselSlide = (req, res) => {
  const modifiedSlide = req.body;
  const id = req.params.id;
  homeService
    .editCarouselSlide(modifiedSlide, id)
    .then((modifiedSlide) => res.status(202).send(modifiedSlide))
    .catch((err) => res.status(500).send(err));
};
