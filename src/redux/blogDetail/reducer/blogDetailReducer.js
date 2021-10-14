const initState = {
    loading: false,
    blogDetails: [],
    error: null,
  };
  
  function blogDetails(state = initState, action) {
    // console.log('from red',action.payload);
    switch (action.type) {
      case 'FETCH_HOMEPAGE_BLOGDETAILS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_HOMEPAGE_BLOGDETAILS_SUCCESS':
        // console.log(action.payload);
        return {
          ...state,
          loading: false,
          blogDetails: action.payload,
        };
      case 'FETCH_HOMEPAGE_BLOGDETAILS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default blogDetails;