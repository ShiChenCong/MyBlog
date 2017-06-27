import DataBase from '../utils/database'
const database = new DataBase();
export const SubmitText = (data) => dispatch => {
	return database.addArticle(data)
		.then((data) => {
			console.log(data)
		}).catch((err) => {
			console.log(err)
		})

	// return {
	// 	type:'SEND_TEXT',
	// 	payload:data
	// }
}


// export const getAllOrders = () => dispatch => {
//   orders.getOrders(
//       products => {
//         dispatch(receiveOrders(products))
//       }
//   )
// };
