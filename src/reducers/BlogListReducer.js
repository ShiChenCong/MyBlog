import { Record, List } from 'immutable';

const InitialState = Record({
	BlogList:List([]),
});

const initialState = new InitialState();

export default function BlogListReducer (state = initialState, action = {}) {
	switch(action.type){
		case 'QUERY_HEADER_TIME':
			return state.setIn(['BlogList'], List(action.payload));
	}

	return state
}
