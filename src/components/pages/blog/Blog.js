

import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchHomepageBlogs } from '../../../redux/blog/actions/api';



const Blog = ({

}) => {
  const [] = useState([]);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blog)

  console.log(blogs.countries)
  useEffect(() => {
    dispatch(fetchHomepageBlogs());
  }, []);


  return (
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.countries.map(item => {
        return <div class="w-full bg-white rounded-lg p-12 flex flex-col items-center shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
          <div class="mb-8 py-0">
            <a href="#">
              <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{item.title}</h5>
              </a>
              <p class="font-normal text-gray-700 mb-3">{item.title + item.title + item.title}</p>
              <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
      })}
    </div>
    </div>
  );
};

export default Blog;