export const GetRequest = async (url) => {
    let result = null
    fetch(url)
        .then((response) => response.json())
        .then((json) => {return json.genres})
        .catch((ex) => console.log(ex))
};

export const GetMovieRequest = (url) => {
    let result = null
    fetch(url)
        .then((response) => response.json())
        .then((json) => {return json.results})
        .catch((ex) => console.log(ex))
};