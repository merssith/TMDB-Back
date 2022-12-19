require("dotenv").config();
const axios = require("axios");

exports.topTvShows = async () => {
  const tvShowRequest = await axios
    .get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY_TMDB}`
    )
    .then((tvShow) => {
      return tvShow.data.results;
    })
    .catch((err) => console.log(err));

  return tvShowRequest;
};

exports.searchTvShows = async (query) => {
  const tvShowRequest = await axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY_TMDB}&query=${query}`
    )
    .then((tvShow) => {
      return tvShow.data.results;
    })
    .catch((err) => console.log(err));

  return tvShowRequest;
};

exports.seeTvShowDetails = async (tvShowId) => {
  const tvShowRequest = await axios
    .get(
      `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${process.env.API_KEY_TMDB}`
    )
    .then((tvShow) => {
      return tvShow.data;
    })
    .catch((err) => console.log(err));

  return tvShowRequest;
};
