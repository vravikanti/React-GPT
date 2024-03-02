export const logo= "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" ;

export const API_Movies =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };

export const API_NowPlaying_URL = "https://api.themoviedb.org/3/movie/now_playing";

export const API_PopularMovies_URL = "https://api.themoviedb.org/3/movie/popular";

export const API_TopRatesMovies_URL = "https://api.themoviedb.org/3/movie/top_rated";

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";


export const Supported_languages=[
  {key:'en',name:'English'},
  {key:'hindi',name:'Hindi'}
]

export const OpenAI_key=process.env.REACT_APP_OpenAI_key;