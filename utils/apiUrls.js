export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY= '?api_key=ae9c379c0a2f7020bfcc20e8fec6166e';
export const GENRE_LIST= 'genre/movie/list';
export const MOVIE_LIST_FROM_GENRE= 'discover/movie';
export const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
export const POPULAR_MOVIES = 'movie/popular';
export const LANGUAGE_TR ='&language=tr-TR';


export const GetMovieImageUrl = async(imagePath) => {
     return MOVIE_IMAGE_URL + imagePath;
};
