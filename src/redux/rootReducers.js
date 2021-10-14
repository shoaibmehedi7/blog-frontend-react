import { combineReducers } from 'redux';
import blog from './blog/reducer/blogReducer'
import blogDetails from './blogDetail/reducer/blogDetailReducer'

export default combineReducers({
blog,blogDetails
});