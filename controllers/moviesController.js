const moviesService = require("../services/moviesService");
const moviesDto = require("../dto/moviesDto");

exports.topMovies = (req, res) => {
  moviesService
    .topMovies()
    .then((movies) => res.status(200).send(moviesDto.parseMoviesData(movies)))
    .catch((err) => res.status(500).send(err));
};

exports.searchMovies = (req, res) => {
  let { query } = req.query;
  moviesService
    .searchMovies(query)
    .then((movies) => res.status(200).send(moviesDto.parseMoviesData(movies)))
    .catch((err) => res.status(500).send(err));
};

exports.seeMovieDetails = (req, res) => {
  let movieId = req.params.id;
  moviesService
    .seeMovieDetails(movieId)
    .then((movie) => res.status(200).send(movie))
    .catch((err) => res.status(500).send(err));
};
