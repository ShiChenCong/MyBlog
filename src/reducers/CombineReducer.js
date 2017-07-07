import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import IndexReducer from './IndexReducer';
import EditorReducer from './EditorReducer';
import BlogListReducer from './BlogListReducer'
const rootReducer = combineReducers({
	IndexReducer,
	routerReducer,
	EditorReducer,
	BlogListReducer
})
export default rootReducer
