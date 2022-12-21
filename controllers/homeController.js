const homeService = require("../services/homeService.js");

exports.carrousel = (req, res) => {
  homeService
    .carrousel()
    .then((carrousels) => res.status(200).send(carrousels))
    .catch((err) => res.status(500).send(err));
};

exports.carrouselActive = (req, res) => {
  homeService
    .carrouselActive()
    .then((carrousels) => res.status(200).send(carrousels))
    .catch((err) => res.status(500).send(err));
};

exports.newCarrouselSlide = (req, res) => {
  const slide = req.body;
  homeService
    .newCarrouselSlide(slide)
    .then((newSlide) => res.status(201).send(newSlide))
    .catch((err) => res.status(500).send(err));
};

exports.deleteCarrouselSlide = (req, res) => {
  const id = req.params.id;
  homeService
    .deleteCarrouselSlide(id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(500).send(err));
};

exports.editCarrouselSlide = (req, res) => {
  const modifiedSlide = req.body;
  const id = req.params.id;
  homeService
    .editCarrouselSlide(modifiedSlide, id)
    .then((modifiedSlide) => res.status(202).send(modifiedSlide))
    .catch((err) => res.status(500).send(err));
};
