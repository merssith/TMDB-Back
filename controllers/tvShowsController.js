const tvShowsService = require("../services/tvShowsService");

exports.topTvShows = (req, res) => {
  tvShowsService
    .topTvShows()
    .then((tvShows) => res.status(200).send(tvShows))
    .catch((err) => res.status(500).send(err));
};

exports.searchTvShows = (req, res) => {
  let { query } = req.query;
  tvShowsService
    .searchTvShows(query)
    .then((tvShows) => res.status(200).send(tvShows))
    .catch((err) => res.status(500).send(err));
};

exports.seeTvShowDetails = (req, res) => {
  let tvShowId = req.params.id;
  tvShowsService
    .seeTvShowDetails(tvShowId)
    .then((tvShow) => res.status(200).send(tvShow))
    .catch((err) => res.status(500).send(err));
};
