require("dotenv").config();
const axios = require("axios");
const { checkAge, idsToString, getRandomInt } = require("../utils/functions");

exports.surpriseMe = async () => {
  let page = getRandomInt(1, 500);
  let moviesRecommendations = await getRecommendation("movie", page);
  let tvRecommendations = await getRecommendation("tv", page);
  return { moviesRecommendations, tvRecommendations };
};

exports.recommendationMovieByPreferences = async (user) => {
  if (!user.moviePreferences) throw 404;
  let userMoviePreferences = idsToString(user.moviePreferences);
  let adultBool = false;
  if (user.age) {
    adultBool = checkAge(user.age);
  }
  let movieRecommendations = await getRecommendationByPreferences(
    "movie",
    userMoviePreferences,
    adultBool
  );
  return movieRecommendations;
};

exports.recommendationTvByPreferences = async (user) => {
  if (!user.tvPreferences) throw 404;
  let userTvPreferences = idsToString(user.tvPreferences);
  let adultBool = false;
  if (user.age) {
    adultBool = checkAge(user.age);
  }
  let tvRecommendations = await getRecommendationByPreferences(
    "tv",
    userTvPreferences,
    adultBool
  );
  return tvRecommendations;
};

exports.recommendationMovieOnePreference = async (user, id) => {
  let adultBool = false;
  if (user.age) {
    adultBool = checkAge(user.age);
  }
  let movieRecommendations = await getRecommendationByPreferences(
    "movie",
    id,
    adultBool
  );
  return movieRecommendations;
};

exports.recommendationTvOnePreference = async (user, id) => {
  let adultBool = false;
  if (user.age) {
    adultBool = checkAge(user.age);
  }
  let tvRecommendations = await getRecommendationByPreferences(
    "tv",
    id,
    adultBool
  );
  return tvRecommendations;
};

// ADITIONAL FUNCTIONS

async function getRecommendation(source, page) {
  return await axios
    .get(
      `https://api.themoviedb.org/3/discover/${source}?api_key=${process.env.API_KEY_TMDB}&include_adult=false&page=${page}&sort_by=popularity.desc`,
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    )
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => err);
}

async function getRecommendationByPreferences(
  source,
  userPreferences,
  adultBool
) {
  return await axios
    .get(
      `https://api.themoviedb.org/3/discover/${source}?api_key=${process.env.API_KEY_TMDB}&with_genres=${userPreferences}&include_adult=${adultBool}&page=1&sort_by=popularity.desc`,
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    )
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => err);
}
