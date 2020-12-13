const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY= '?api_key=ae9c379c0a2f7020bfcc20e8fec6166e';
const GENRE_LIST= 'genre/movie/list';
const MOVIE_LIST_FROM_GENRE= 'discover/movie';
const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const POPULAR_MOVIES = 'movie/popular';
const LANGUAGE_TR ='&language=tr-TR';

export const GetCategoryUrl = async() => {
     return API_URL + GENRE_LIST + API_KEY + LANGUAGE_TR;
};

export const GetMovieListFromGenre = async(genreId) => {
     return API_URL + MOVIE_LIST_FROM_GENRE + API_KEY + '&with_genres=' + genreId + LANGUAGE_TR;
}

export const GetMovieImageUrl = async(imagePath) => {
     return MOVIE_IMAGE_URL + imagePath;
};

export const GetPopularMovies = async() => {
     return API_URL + POPULAR_MOVIES + API_KEY + LANGUAGE_TR;
};