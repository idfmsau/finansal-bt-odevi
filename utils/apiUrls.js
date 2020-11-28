const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY= '?api_key=ae9c379c0a2f7020bfcc20e8fec6166e';
const GENRE_LIST= 'genre/movie/list';

export const GetCategoryUrl = async() => {
     return API_URL + GENRE_LIST + API_KEY;
};