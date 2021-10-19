import { combineReducers } from 'redux';
import blog from './blog/reducer/blogReducer'
import blogDetails from './blogDetail/reducer/blogDetailReducer'
import auth from './auth/reducer/authReducer';
import createBlogPostReducer from './admin/reducer/crudblogReducer';

export default combineReducers({
blog,blogDetails,auth,createBlogPostReducer
});