import axios from "axios";
import { createBlogError, createBlogRequest, createBlogSuccess } from "./crudBlogAction";


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