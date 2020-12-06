export const GetRequest = async(url) => {
    let result = null
    await fetch(url)
        .then((response) => response.json())
        .then((json) => (result = json.genres))
        .catch((ex) => console.log(ex))
    return result;
};

export const GetMovieRequest = async(url) => {
    let result = null
    await fetch(url)
        .then((response) => response.json())
        .then((json) => (result = json.results))
        .catch((ex) => console.log(ex))
    return result;
};