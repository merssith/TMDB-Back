require("dotenv").config();
const axios = require("axios");

exports.surpriseMe = async () => {
  const limitResults = 5;
  let moviesRecommendations = [];
  let tvRecommendations = [];
  let movieLimit = await getLimits("movie");
  let tvShowLimit = await getLimits("tv");

  for (let i = 0; i < limitResults; i++) {
    let id = getRandomInt(1, movieLimit);
    let movieRecommendation = await getRecommendation("movie", id);
    if (movieRecommendation != null && movieRecommendation.adult === false)
      moviesRecommendations.push(movieRecommendation);

    id = getRandomInt(1, tvShowLimit);
    let tvRecommendation = await getRecommendation("tv", id);
    if (tvRecommendation != null && tvRecommendation.adult === false)
      tvRecommendations.push(tvRecommendation);
  }

  return { moviesRecommendations, tvRecommendations };
};

// ADITIONAL FUNCTIONS

async function getLimits(source) {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${source}/latest?api_key=${process.env.API_KEY_TMDB}`
    )
    .then((result) => {
      return result.data.id;
    })
    .catch((err) => err);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function getRecommendation(source, id) {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${source}/${id}?api_key=${process.env.API_KEY_TMDB}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
}
