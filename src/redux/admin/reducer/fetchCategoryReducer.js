const initState = {
    loading: false,
    categories: null,
    error: null,
  };
  
  function fetchCategoriesReducer(state = initState, action) {
    switch (action.type) {
      case 'FETCH_CATEGORIES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_CATEGORIES_SUCCESS':
        return {
          ...state,
          loading: false,
          categories: action.payload,
        };
      case 'FETCH_CATEGORIES_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default fetchCategoriesReducer;