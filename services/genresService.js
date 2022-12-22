require("dotenv").config();
const axios = require("axios");

exports.moviesGenres = async () => {
  const moviesGenres = await axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY_TMDB}&language=en-US`,
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    )
    .then((moviesGenres) => {
      return moviesGenres.data.genres;
    })
    .catch((err) => console.log(err));

  return moviesGenres;
};

exports.tvShowsGenres = async () => {
  const tvShowsGenres = await axios
    .get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY_TMDB}&language=en-US`,
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    )
    .then((tvShowsGenres) => {
      return tvShowsGenres.data.genres;
    })
    .catch((err) => console.log(err));

  return tvShowsGenres;
};
