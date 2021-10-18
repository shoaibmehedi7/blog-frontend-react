import { combineReducers } from 'redux';
import blog from './blog/reducer/blogReducer'
import blogDetails from './blogDetail/reducer/blogDetailReducer'
import signin from './auth/reducer/authReducer';

export default combineReducers({
blog,blogDetails,signin
});