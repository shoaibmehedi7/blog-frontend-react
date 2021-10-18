import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth'

import { fetchLoginRequest, fetchLoginSuccess, fetchLoginError } from './authAction'

export function signInAPI(email, password) {
  return (dispatch) => {
    dispatch(fetchLoginRequest());
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(fetchLoginSuccess());
      })
      .catch((error) => {
        dispatch(fetchLoginError());
      });
  };
}