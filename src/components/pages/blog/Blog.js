

import React, { useEffect, useState } from 'react';
import { Instagram } from 'react-content-loader';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchHomepageBlogs } from '../../../redux/blog/actions/api';
import MyFacebookLoader from '../../common/ContentLoadingFacebook';
import Detail from './Detail';

const Blog = () => {
  // localStorage.setItem('loggedin',true)
  const [] = useState([]);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blog)
  const history = useHistory()

  console.log(blogs.countries)
  useEffect(() => {
    dispatch(fetchHomepageBlogs());
  }, []);


  const handleClick = (category, slug) => {
    // history.push('/'+category+'/'+slug)
  }

  if (blogs.loading) {
    return <Instagram />
  } else
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {blogs.countries.map(item => {
            // return <a href={'react' + '/' + item.id}>
            //   <div key={item.id} className=" max-w-sm rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
            //     <img className="w-full" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="Mountain" />
            //     <div className="px-6 py-4">
            //       <p className="text-gray-900 leading-none text-purple-500 mb-2 font-bold">React JS</p>

            //       <div className="font-bold text-xl mb-2 cursor-pointer text-green-500 capitalize">{item.title}</div>
            //       <p className="text-gray-700 text-base ">{item.title + item.title + item.title + item.title}</p>
            //     </div>
            //     <div className="px-6 pt-4 pb-2">
            //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            //     </div>
            //     <div className="flex items-center px-6 pt-4 pb-2">
            //       <img className="w-10 h-10 rounded-full mr-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar of Writer" />
            //       <div className="text-sm">
            //         <p className="text-gray-900 leading-none">John Smith</p>
            //         <p className="text-gray-600">Aug 18</p>
            //       </div>
            //     </div>
            //   </div>
            // </a>



            return <div className=" w-full bg-white rounded-lg overflow-hidden flex flex-col shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
              <img className="w-full" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="Mountain" />
              <div className="px-6 py-4">
                <p className="text-gray-900 leading-none text-purple-500 mb-2 font-bold">React JS</p>
                <a href={'react' + '/' + item.id}><div className="font-bold text-xl mb-2 cursor-pointer text-green-500 capitalize">{item.title}</div></a>
                <p className="text-gray-700 text-base ">{item.title + item.title + item.title + item.title}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
              <div className="relative flex  px-6 pt-4 pb-2 bottom-0 mt-auto">
                <img className="w-10 h-10 rounded-full mr-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar of Writer" />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">John Smith</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>



            // return <div className="w-full bg-white rounded-lg p-12 flex flex-col items-center shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
            //   <div className="mb-8 py-0">
            //     <a href="#">

            //       <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="" />
            //     </a>
            //     <div className="p-5">
            //       <a href="#">
            //         <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{item.title}</h5>
            //       </a>
            //       <p className="font-normal text-gray-700 mb-3">{item.title + item.title + item.title}</p>
            //       <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
            //         Read more
            //       </a>
            //       {/* <Detail blog={item}/> */}

            //     </div>
            //   </div>
            // </div>
          })}
        </div>
      </div>
    );
};

export default Blog;