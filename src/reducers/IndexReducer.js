const initial = {
	name:'scc',
	age:23
};

function IndexReducer (state = initial,action={}){
	switch(action.type){
		case 'TEST':
			console.log(action.payload)
	}
	return state
}

export default IndexReducer
