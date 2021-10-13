const initState = {
    loading: false,
    countries: [],
    error: null,
  };
  
  function blog(state = initState, action) {
    switch (action.type) {
      case 'FETCH_HOMEPAGE_BLOG_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_HOMEPAGE_BLOG_SUCCESS':
        return {
          ...state,
          loading: false,
          countries: action.payload,
        };
      case 'FETCH_HOMEPAGE_BLOG_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default blog;