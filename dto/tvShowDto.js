exports.parseTvShowData = (data) => {
  let tvShowArray = [];
  for (let i = 0; i < data.length; i++) {
    let tvShowObject = {
      id: data[i].id,
      title: data[i].name,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
        data[i].poster_path,
      vote_average: data[i].vote_average,
      overview: data[i].overview,
      original_language: data[i].original_language,
      genre: data[i].genre_ids,
    };
    tvShowArray.push(tvShowObject);
  }
  return tvShowArray;
};
