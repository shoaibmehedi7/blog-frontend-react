import axios from "axios";
import { fetchDataError, fetchDataRequest, fetchDataSuccess } from "./authAction";


export function fetchHomepageBlogs() {
    return (dispatch) => {
      dispatch(fetchDataRequest());
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          let newData = response.data.map((country) => {
            return {
              ...country,
              value: country.name,
              label: country.name,
            };
          });
  
          dispatch(fetchDataSuccess(newData));
        })
        .catch((error) => {
          dispatch(fetchDataError(error.message));
        });
    };
  }