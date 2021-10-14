import axios from "axios";
import { fetchBlogDetailsError, fetchBlogDetailsRequest, fetchBlogDetailsSuccess, fetchDataError, fetchDataRequest, fetchDataSuccess } from "./blogDetailAction";


export function fetchBlogDetails(category,slag) {
    return (dispatch) => {
      dispatch(fetchBlogDetailsRequest());
      axios
        .get('https://jsonplaceholder.typicode.com/todos/'+slag)
        .then((response) => {
          // console.log(response.data);
          // let newData = response.data.map((blogDetails) => {
          //   return {
          //     ...blogDetails,
          //     value: blogDetails.name,
          //     label: blogDetails.name,
          //   };
          // });

          let newData = response.data;
  
          dispatch(fetchBlogDetailsSuccess(newData));
        })
        .catch((error) => {
          dispatch(fetchBlogDetailsError(error.message));
        });
    };
  }