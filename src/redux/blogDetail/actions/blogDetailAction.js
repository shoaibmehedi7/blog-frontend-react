import { FETCH_HOMEPAGE_BLOGDETAILS_ERROR, FETCH_HOMEPAGE_BLOGDETAILS_REQUEST, FETCH_HOMEPAGE_BLOGDETAILS_SUCCESS } from "./blogDetailActionType";

  
  export function fetchBlogDetailsRequest() {
    return {
      type: FETCH_HOMEPAGE_BLOGDETAILS_REQUEST,
    };
  }
  
  export function fetchBlogDetailsSuccess(blogDetails) {
    console.log('form action',blogDetails);
    return {
      type: FETCH_HOMEPAGE_BLOGDETAILS_SUCCESS,
      payload: blogDetails,
    };
  }
  export function fetchBlogDetailsError(error) {
    return {
      type: FETCH_HOMEPAGE_BLOGDETAILS_ERROR,
      payload: error,
    };
  }