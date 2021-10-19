const initState = {
    loading: false,
    blogPost: null,
    error: null,
  };
  
  function createBlogPostReducer(state = initState, action) {
    switch (action.type) {
      case 'CREATE_BLOG_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'CREATE_BLOG_SUCCESS':
        return {
          ...state,
          loading: false,
          blogPost: action.payload,
        };
      case 'CREATE_BLOG_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default createBlogPostReducer;