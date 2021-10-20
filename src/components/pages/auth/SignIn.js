import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signin, signInAPI } from '../../../redux/auth/actions/api';
import CustomInput from '../../common/CustomInput';

function SignIn() {

    const history = useHistory();
    const [inputUser, handleInputUser] = useState("");
    const [inputPass, handleInputPass] = useState("");

    const [] = useState([]);
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth)
    if (auth.user) {
        history.push('/')
    }


    return (
        <>
            <div className='content-center	w-full mx-auto'>
                <div className="max-w-xs mx-auto mt-8">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <CustomInput
                                type="text"
                                id="user"
                                className="rounded-sm px-4 py-3 mt-3 focus:outline-none w-full border bg-transparent border- 
                              gray-300"
                                placeholder="User ID"
                                handleInput={handleInputUser}
                                value={inputUser}
                            />
                            {/* <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" /> */}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>


                            <CustomInput
                                type="password"
                                id="pass"
                                className="rounded-sm px-4 py-3 mt-3 focus:outline-none w-full border bg-transparent border- 
                              gray-300"
                                placeholder="Password"
                                handleInput={handleInputPass}
                                value={inputPass}
                            />
                            {/* <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" /> */}
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button onClick={() => dispatch(signInAPI(inputUser, inputPass))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignIn
