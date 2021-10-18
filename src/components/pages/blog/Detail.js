import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchBlogDetails } from '../../../redux/blogDetail/actions/blogDetailApi';
import Blog from './Blog';
import { useHistory } from 'react-router';
import { Instagram } from 'react-content-loader';
import { fetchHomepageBlogs } from '../../../redux/blog/actions/api';

function Detail() {
    const { details, slug } = useParams();
    const [] = useState([]);
    const dispatch = useDispatch();
    const blogDetails = useSelector(state => state.blogDetails);
    const blogs = useSelector(state => state.blog)
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchHomepageBlogs());
    }, []);

    useEffect(() => {
        dispatch(fetchBlogDetails('react', slug));
    }, [slug]);
    const handleClick = (slug) => {
        console.log(slug);
        history.push('/react/' + slug)
    }
    if (blogDetails.loading) {
        return <Instagram />
    } else
        return (
            // <div className=''>
            //     <h2>{blogDetails.blogDetails.title}</h2>
            //     <button onClick={() => { handleClick(5) }}>click</button>
            // </div>
            <div className='grid grid-cols-4 max-w-6xl mx-auto px-4 py-12 overflow-hidden'>
                {/* <a href={'react' + '/' + blogDetails.blogDetails.id}> */}
                    <div key={blogDetails.blogDetails.id} className="col-span-3  rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
                        <img className="w-full" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="Mountain" />
                        <div className="px-6 py-4">
                            <p className="text-gray-900 leading-none text-purple-500 mb-2 font-bold">React JS</p>

                            <div className="font-bold text-xl mb-2 cursor-pointer text-green-500 capitalize">{blogDetails.blogDetails.title}</div>
                            <p className="text-gray-700 text-base ">{blogDetails.blogDetails.title + blogDetails.blogDetails.title}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                        <div className="flex items-center px-6 pt-4 pb-2">
                            <img className="w-10 h-10 rounded-full mr-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar of Writer" />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">John Smith</p>
                                <p className="text-gray-600">Aug 18</p>
                            </div>
                        </div>
                    </div>
                {/* </a> */}
                {/* <div className="col-span-3 bg-white rounded-lg overflow-hidden flex flex-col shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
                    <img className="w-full" src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="Mountain" />
                    <div className="px-6 py-4">
                        <p className="text-gray-900 leading-none text-purple-500 mb-2 font-bold">React JS</p>
                        <a href={'react' + '/' + blogDetails.blogDetails.id}><div className="font-bold text-xl mb-2 cursor-pointer text-green-500 capitalize">{blogDetails.blogDetails.title}</div></a>
                        <p className="text-gray-700 text-base ">{blogDetails.blogDetails.title + blogDetails.blogDetails.title + blogDetails.blogDetails.title + blogDetails.blogDetails.title}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                    <div className="relative flex  px-6 pt-4 pb-2">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar of Writer" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">John Smith</p>
                            <p className="text-gray-600">Aug 18</p>
                        </div>
                    </div>
                </div> */}
                <div className='content-center	mx-4'>
                    {blogs.countries.map(item => {
                        return <div className="mb-4 w-full bg-white rounded-lg overflow-hidden flex flex-col shadow-lg hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103">
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
                    })}
                </div>
            </div>
        )
}

export default Detail
