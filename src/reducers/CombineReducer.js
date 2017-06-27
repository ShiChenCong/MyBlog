import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import IndexReducer from './IndexReducer';
import EditorReducer from './EditorReducer';

const rootReducer = combineReducers({
	IndexReducer,
	routerReducer,
	EditorReducer
})
export default rootReducer
