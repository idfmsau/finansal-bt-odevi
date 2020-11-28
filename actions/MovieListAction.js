import { GET_CATEGORIES } from '../types/MovieListType';
import { GetRequest } from '../utils/apiRequester';
import { GetCategoryUrl } from '../utils/apiUrls';

export default getCategories=() =>{
    return (dispatch) =>{
        dispatch({
            type: GET_CATEGORIES,
            payload: await GetRequest(await GetCategoryUrl())
        });
    };
}