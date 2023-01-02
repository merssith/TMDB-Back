const recommendationsService = require("../services/recommendationsService");
const moviesDto = require("../dto/moviesDto");
const tvShowDto = require("../dto/tvShowDto");

exports.surpriseMe = (req, res) => {
  recommendationsService
    .surpriseMe()
    .then((recommendations) => {
      let moviesRecommendation = moviesDto.parseMoviesData(
        recommendations.moviesRecommendations
      );
      let tvRecommendation = tvShowDto.parseTvShowData(
        recommendations.tvRecommendations
      );
      res.status(200).send({ moviesRecommendation, tvRecommendation });
    })
    .catch((err) => res.status(500).send(err));
};

exports.recommendationMovieByPreferences = (req, res) => {
  const user = req.user;
  recommendationsService
    .recommendationMovieByPreferences(user)
    .then((recommendations) =>
      res.status(200).send(moviesDto.parseMoviesData(recommendations))
    )
    .catch((err) => res.status(500).send(err));
};

exports.recommendationTvByPreferences = (req, res) => {
  const user = req.user;
  recommendationsService
    .recommendationTvByPreferences(user)
    .then((recommendations) =>
      res.status(200).send(tvShowDto.parseTvShowData(recommendations))
    )
    .catch((err) => res.status(500).send(err));
};

exports.recommendationMovieOnePreference = (req, res) => {
  const user = req.user;
  const id = req.params.id;
  recommendationsService
    .recommendationMovieOnePreference(user, id)
    .then((recommendations) =>
      res.status(200).send(moviesDto.parseMoviesData(recommendations))
    )
    .catch((err) => res.status(500).send(err));
};

exports.recommendationTvOnePreference = (req, res) => {
  const user = req.user;
  const id = req.params.id;
  recommendationsService
    .recommendationTvOnePreference(user, id)
    .then((recommendations) =>
      res.status(200).send(tvShowDto.parseTvShowData(recommendations))
    )
    .catch((err) => res.status(500).send(err));
};
