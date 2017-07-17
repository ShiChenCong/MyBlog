import databaseFactory from '../utils/database';
import * as types from '../configs/types';
const {
	QUERY_BY_ID
} = types;

//根据id查询文章
export const queryById = (collection, id) => dispatch => {
	return databaseFactory.queryById(collection, id)
		.then((data) => {
			console.log(data)
		}).catch((err) => {
			console.log(err)
		})
}
