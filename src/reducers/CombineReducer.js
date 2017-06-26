import { combineReducers } from 'redux';
import IndexReducer from './IndexReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
	IndexReducer,
	routerReducer
})
export default rootReducer
