import { CREATE_CATEGORY_ERROR, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS } from "./actionType";

  
  export function createCategoryRequest() {
    return {
      type: CREATE_CATEGORY_REQUEST,
    };
  }
  
  export function createCategorySuccess(category) {
    return {
      type: CREATE_CATEGORY_SUCCESS,
      payload: category,
    };
  }
  export function createCategoryError(error) {
    return {
      type: CREATE_CATEGORY_ERROR,
      payload: error,
    };
  }