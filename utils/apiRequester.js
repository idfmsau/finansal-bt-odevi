import axios from 'axios'
export const GetRequest = async(url) => {
    let result = null
    await fetch(url).then((response) => console.log(response)).catch((ex)=>console.log(ex))

    // return result
    // let result = await axios.get(url)
    await console.log("url"+ url);
    // await console.log(result);
    return result;
};