import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchBlogDetails } from '../../../redux/blogDetail/actions/blogDetailApi';
import Blog from './Blog';
import { useHistory } from 'react-router';

function Detail() {
    const { details, slug } = useParams();
    const [] = useState([]);
    const dispatch = useDispatch();
    const blogDetails = useSelector(state => state.blogDetails);
    const history = useHistory()

    console.log('from view ', blogDetails.blogDetails);
    useEffect(() => {
        dispatch(fetchBlogDetails('react', slug));
    }, [slug]);
    const handleClick = (slug) => {
        console.log(slug);
        history.push('/react/'+slug)
    }
    return (
        <div className=''>
            <h2>{blogDetails.blogDetails.title}</h2>
            <button onClick={() => { handleClick(5) }}>click</button>
        </div>
    )
}

export default Detail
