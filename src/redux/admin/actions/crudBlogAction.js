import { CREATE_BLOG_ERROR, CREATE_BLOG_REQUEST, CREATE_BLOG_SUCCESS } from "./actionType";

  
  export function createBlogRequest() {
    return {
      type: CREATE_BLOG_REQUEST,
    };
  }
  
  export function createBlogSuccess(blogContent) {
    return {
      type: CREATE_BLOG_SUCCESS,
      payload: blogContent,
    };
  }
  export function createBlogError(error) {
    return {
      type: CREATE_BLOG_ERROR,
      payload: error,
    };
  }