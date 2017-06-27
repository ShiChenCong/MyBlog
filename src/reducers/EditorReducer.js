import { Record } from 'immutable';

const InitialState = Record({
	text:'',
})
const initialState = new InitialState();

export default function EditorReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'SEND_TEXT':
			return state
	}

	return state
}
