import { Record } from 'immutable';
import AcTypes from '../configs/types'
const {
	SEND_TEXT
} = AcTypes

const InitialState = Record({
	text:'',
})

const initialState = new InitialState();

export default function EditorReducer(state = initialState, action = {}) {
	switch (action.type) {
		case SEND_TEXT:
			return state
	}

	return state
}
