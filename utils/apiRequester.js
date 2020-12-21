import {
    API_URL,
    API_KEY,
    LANGUAGE_TR
} from './apiUrls'

export const GetRequest = async (url) => {
    let result = null
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            return json.genres
        })
        .catch((ex) => console.log(ex))
};

export const GetMovieRequest = (url) => {
    let result = null
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            return json.results
        })
        .catch((ex) => console.log(ex))
};

export const GetFavouriteFilms = (favourites, setFunc) => {
    let filmInfos = [];
    for (let movieId of favourites) {
        console.log(movieId);
        let movieUrl = API_URL + "movie/" + movieId + API_KEY + LANGUAGE_TR;
        fetch(movieUrl)
            .then((response) => response.json())
            .then((json) => {
                filmInfos.push(json);
            })
            .catch((ex) => console.log(ex));
    }

    setFunc(filmInfos);
}