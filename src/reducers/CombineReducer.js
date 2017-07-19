import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import IndexReducer from './IndexReducer';
import EditorReducer from './EditorReducer';
import BlogListReducer from './BlogListReducer';
import BlogDetailReducer from './BlogDetailReducer'


const rootReducer = combineReducers({
	IndexReducer,
	routerReducer,
	EditorReducer,
	BlogListReducer,
    BlogDetailReducer
})
export default rootReducer
