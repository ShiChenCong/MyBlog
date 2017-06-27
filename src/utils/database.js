const url = 'localhost:3000';
const reqHeaders =  {'Accept': 'application/json', 'Content-Type': 'application/json'};


export default class DataBase {
	//添加文章
	addArticle(text) {
		return fetch(`http://${url}/addArticle`, {
			method: 'POST',
			headers: reqHeaders,
			body: JSON.stringify({text: text})
		}).then((res) => {
			if (res.ok) {
				return true
			} else {
				return false
			}
		}).catch((err) => {
			return err
		})
	}
}
