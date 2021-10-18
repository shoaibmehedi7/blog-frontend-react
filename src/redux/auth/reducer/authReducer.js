const initState = {
    loading: false,
    countries: [],
    error: null,
  };
  
  function signin(state = initState, action) {
    switch (action.type) {
      case 'FETCH_LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_LOGIN_SUCCESS':
        return {
          ...state,
          loading: false,
          countries: action.payload,
        };
      case 'FETCH_LOGIN_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default signin;