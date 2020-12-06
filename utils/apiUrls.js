const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY= '?api_key=ae9c379c0a2f7020bfcc20e8fec6166e';
const GENRE_LIST= 'genre/movie/list';
const MOVIE_LIST_FROM_GENRE= 'discover/movie';
const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export const GetCategoryUrl = async() => {
     return API_URL + GENRE_LIST + API_KEY;
};

export const GetMovieListFromGenre = async(genreId) => {
     return API_URL + MOVIE_LIST_FROM_GENRE + API_KEY + '&with_genres=' + genreId;
}

export const GetMovieImageUrl = async(imagePath) => {
     return MOVIE_IMAGE_URL + imagePath;
};