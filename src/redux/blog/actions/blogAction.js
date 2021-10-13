import { FETCH_HOMEPAGE_BLOG_ERROR, FETCH_HOMEPAGE_BLOG_REQUEST, FETCH_HOMEPAGE_BLOG_SUCCESS } from "./actionType";

  
  export function fetchDataRequest() {
    return {
      type: FETCH_HOMEPAGE_BLOG_REQUEST,
    };
  }
  
  export function fetchDataSuccess(countries) {
    return {
      type: FETCH_HOMEPAGE_BLOG_SUCCESS,
      payload: countries,
    };
  }
  export function fetchDataError(error) {
    return {
      type: FETCH_HOMEPAGE_BLOG_ERROR,
      payload: error,
    };
  }