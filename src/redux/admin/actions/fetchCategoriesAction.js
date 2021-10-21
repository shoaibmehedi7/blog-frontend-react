import { FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "./actionType";

  
  export function fetchCategoriesRequest() {
    return {
      type: FETCH_CATEGORIES_REQUEST,
    };
  }
  
  export function fetchCategoriesSuccess(category) {
    return {
      type: FETCH_CATEGORIES_SUCCESS,
      payload: category,
    };
  }
  export function fetchCategoriesError(error) {
    return {
      type: FETCH_CATEGORIES_ERROR,
      payload: error,
    };
  }