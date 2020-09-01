const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with-genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with-genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with-genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with-genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with-genres=10770`,
};

export default requests;
