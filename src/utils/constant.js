export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPT = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TOCKEN
    }
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LAGUAGES = ["english", "hindi", "spanish"];

export const API_KEY = process.env.REACT_APP_API_KEY;

export const SEARCH_QUERY = "https://api.themoviedb.org/3/search/movie?query=";