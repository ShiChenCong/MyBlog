import databaseFactory from '../utils/database';
import AcTypes from '../configs/types';

const {
    QUERY_BY_ID
} = AcTypes;

//根据id查询文章
export const queryById = (collection, id) => dispatch => {
    return databaseFactory.queryById(collection, id)
        .then((data) => {
            dispatch(getArticle(data));
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
}

//把文章放到redux中
const getArticle = (data) => {
    return {
        type: QUERY_BY_ID,
        payload: data
    }
}