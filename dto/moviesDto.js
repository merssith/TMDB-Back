exports.parseMoviesData = (data) => {
  let moviesArray = [];
  for (let i = 0; i < data.length; i++) {
    let movieObject = {
      id: data[i].id,
      title: data[i].title,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
        data[i].poster_path,
      vote_average: data[i].vote_average,
      overview: data[i].overview,
      genre: data[i].genre_ids,
      adult: data[i].adult,
    };
    moviesArray.push(movieObject);
  }
  return moviesArray;
};
