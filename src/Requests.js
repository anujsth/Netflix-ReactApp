const key = process.env.REACT_APP_MOVIE_API_KEY;

const requests = {
  requestPopular: `/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
