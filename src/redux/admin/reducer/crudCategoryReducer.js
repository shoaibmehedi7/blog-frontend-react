const initState = {
    loading: false,
    category: null,
    error: null,
  };
  
  function createCategoryReducer(state = initState, action) {
    switch (action.type) {
      case 'CREATE_CATEGORY_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'CREATE_CATEGORY_SUCCESS':
        return {
          ...state,
          loading: false,
          category: action.payload,
        };
      case 'CREATE_CATEGORY_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default createCategoryReducer;