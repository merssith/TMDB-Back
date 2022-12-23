const genresService = require("../services/genresService");

exports.moviesGenres = (req, res) => {
  genresService
    .moviesGenres()
    .then((moviesGenres) => res.status(200).send(moviesGenres))
    .catch((err) => res.status(500).send(err));
};

exports.tvShowsGenres = (req, res) => {
  genresService
    .tvShowsGenres()
    .then((tvShowsGenres) => res.status(200).send(tvShowsGenres))
    .catch((err) => res.status(500).send(err));
};
