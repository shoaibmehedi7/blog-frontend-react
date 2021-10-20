import axios from "axios";
import { createBlogError, createBlogRequest, createBlogSuccess } from "./crudBlogAction";
import { createCategoryError, createCategoryRequest, createCategorySuccess } from "./crudCategoriesAction";


export function createBlogPost(blogContent) {
  console.log('got the content to write ',blogContent);
    return (dispatch) => {
      dispatch(createBlogRequest());
      axios
        .post('https://jsonplaceholder.typicode.com/todos',blogContent)
        .then((response) => {
          console.log('response of post ',response.data);
          dispatch(createBlogSuccess(blogContent));
        })
        .catch((error) => {
          dispatch(createBlogError(error.message));
        });
    };
  }


  export function createCategories(catObj) {
    console.log('got the content to write ',catObj);
      return (dispatch) => {
        dispatch(createCategoryRequest());
        axios
          .post('https://jsonplaceholder.typicode.com/todos',catObj)
          .then((response) => {
            console.log('response of post ',response.data);
            dispatch(createCategorySuccess(catObj));
          })
          .catch((error) => {
            dispatch(createCategoryError(error.message));
          });
      };
    }