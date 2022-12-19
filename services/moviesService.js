require("dotenv").config();
const axios = require("axios");

exports.topMovies = async () => {
  const moviesRequest = await axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY_TMDB}`
    )
    .then((movies) => {
      return movies.data.results;
    })
    .catch((err) => console.log(err));

  return moviesRequest;
};

exports.searchMovies = async (query) => {
  const moviesRequest = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY_TMDB}&query=${query}`
    )
    .then((movies) => {
      return movies.data.results;
    })
    .catch((err) => console.log(err));

  return moviesRequest;
};

exports.seeMovieDetails = async (movieId) => {
  const movieRequest = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY_TMDB}`
    )
    .then((movie) => {
      return movie.data;
    })
    .catch((err) => console.log(err));

  return movieRequest;
};
