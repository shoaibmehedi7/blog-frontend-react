import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signOut } from '../../redux/auth/actions/api';
import '../../styles/sidebar.css'
function HeaderAdmin() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    if (!auth.user) {
        history.push('/signin')

    }

    console.log(auth.user);

    return (
        <>
            <div className="sidebar">
                <button  className='w-full bg-gray-400 font-bold h-14 text-white hover:bg-green-700 focus:outline-none focus:bg-green-600 focus:ring-4 focus:ring-green-600 focus:ring-opacity-50'>Categories</button>
                {auth.user?<button style={{color:'white'}} className='font-bold w-full bg-red-600 h-14 text-white hover:bg-red-700 focus:outline-none focus:bg-red-600 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50' onClick={() => dispatch(signOut())}>Sign Out</button>:""}
            </div>
        </>
    )
}

export default HeaderAdmin
