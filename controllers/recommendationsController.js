const recommendationsService = require("../services/recommendationsService");

exports.surpriseMe = (req, res) => {
  recommendationsService
    .surpriseMe()
    .then((recommendations) => res.status(200).send(recommendations))
    .catch((err) => res.status(500).send(err));
};

exports.recommendationMovieByPreferences = (req, res) => {
  const user = req.user;
  recommendationsService
    .recommendationMovieByPreferences(user)
    .then((recommendations) => res.status(200).send(recommendations))
    .catch((err) => res.status(500).send(err));
};

exports.recommendationTvByPreferences = (req, res) => {
  const user = req.user;
  recommendationsService
    .recommendationTvByPreferences(user)
    .then((recommendations) => res.status(200).send(recommendations))
    .catch((err) => res.status(500).send(err));
};

exports.recommendationMovieOnePreference = (req, res) => {
  const user = req.user;
  const id = req.params.id;
  recommendationsService
    .recommendationMovieOnePreference(user, id)
    .then((recommendations) => res.status(200).send(recommendations))
    .catch((err) => res.status(500).send(err));
};

exports.recommendationTvOnePreference = (req, res) => {
  const user = req.user;
  const id = req.params.id;
  recommendationsService
    .recommendationTvOnePreference(user, id)
    .then((recommendations) => res.status(200).send(recommendations))
    .catch((err) => res.status(500).send(err));
};
