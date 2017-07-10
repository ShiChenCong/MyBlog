import databaseFactory from '../utils/database';
import AcTypes from '../configs/types';
const {
	QUERY_HEADER_TIME
} =  AcTypes

//查询指定的标题及其对应的时间
export const queryHeaderAndTime = (limit, page, collection) => dispatch => {
	return databaseFactory.queryHeaderAndTime(limit, page, collection)
		.then((data) => {
			console.log(data)
			dispatch(list(data));
		}).catch((err) => {
			console.log(err)
		})
}

// 把取到的值 放入redux中
export const list = (data) => {
	return {
		type: QUERY_HEADER_TIME,
		payload: data
	}
}
