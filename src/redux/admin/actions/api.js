import axios from "axios";
import { createBlogError, createBlogRequest, createBlogSuccess } from "./crudBlogAction";
import { createCategoryError, createCategoryRequest, createCategorySuccess } from "./crudCategoriesAction";

import { addDoc, collection, getFirestore ,query,getDocs} from "firebase/firestore";
import Category from "../../../models/categoryModel";
import { fetchCategoriesError, fetchCategoriesRequest, fetchCategoriesSuccess } from "./fetchCategoriesAction";


export function createBlogPost(blogContent) {
  return (dispatch) => {
    dispatch(createBlogRequest());
    axios
      .post('https://jsonplaceholder.typicode.com/todos', blogContent)
      .then((response) => {
        dispatch(createBlogSuccess(blogContent));
      })
      .catch((error) => {
        dispatch(createBlogError(error.message));
      });
  };
}


export function createCategories(catObj) {
  return async (dispatch) => {
    dispatch(createCategoryRequest());
    const db = getFirestore();
    try {
      let catt = new Category({ name: 'ReactJS', description: 'about react', image: '' });

      const docRef = await addDoc(collection(db, "categories"), { ...catt });
      dispatch(createCategorySuccess(docRef));
    } catch (e) {
      dispatch(createCategoryError(e));
    }
  };
}


export function getAllCategories() {

  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    const db = getFirestore();
    try {
      const q = query(collection(db, "categories"));

      const querySnapshot = await getDocs(q);
      let data = []
      // const data = querySnapshot.map(item=>item.data())
      // console.log('---------------------------------------------',data);
      querySnapshot.forEach((doc) => {
        data.push( doc.data());
      });
      console.log(data);
      dispatch(fetchCategoriesSuccess(data));
    } catch (e) {
      dispatch(fetchCategoriesError(e));
    }
  };
}