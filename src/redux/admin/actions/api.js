import axios from "axios";
import { createBlogError, createBlogRequest, createBlogSuccess } from "./crudBlogAction";
import { createCategoryError, createCategoryRequest, createCategorySuccess } from "./crudCategoriesAction";

import { addDoc, collection, getFirestore } from "firebase/firestore";


export function createBlogPost(blogContent) {
  console.log('got the content to write ', blogContent);
  return (dispatch) => {
    dispatch(createBlogRequest());
    axios
      .post('https://jsonplaceholder.typicode.com/todos', blogContent)
      .then((response) => {
        console.log('response of post ', response.data);
        dispatch(createBlogSuccess(blogContent));
      })
      .catch((error) => {
        dispatch(createBlogError(error.message));
      });
  };
}


export function createCategories(catObj) {
  console.log('got the content to write ', catObj);
  return async (dispatch) => {
    dispatch(createCategoryRequest());

    const db = getFirestore();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });
      dispatch(createCategorySuccess(docRef));
    } catch (e) {
      dispatch(createCategoryError(e));
    }
  };
}