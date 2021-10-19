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
        dispatch(fetchLoginError(error.message));
      });
  };
}


export function signUpAPI(email, password) {
  return (dispatch) => {
    dispatch(fetchLoginRequest());
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(fetchLoginSuccess());
      })
      .catch((error) => {
        dispatch(fetchLoginError(error.message));
      });
  };
}




export function isLoggedIn() {
  return (dispatch) => {
    dispatch(fetchLoginRequest());
    const auth = getAuth();
    // const user = auth.currentUser;
    // console.log('eikhane ',user);
    // if (user) {
    //   dispatch(fetchLoginSuccess());
    // } else {
    //   dispatch(fetchLoginError());
    // }

      auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(fetchLoginSuccess(user));
    } else {
      dispatch(fetchLoginError());
    }
  });

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     localStorage.setItem('user', JSON.stringify(user));
    //     dispatch(fetchLoginSuccess());
    //   })
    //   .catch((error) => {
    //     dispatch(fetchLoginError(error.message));
    //   });
  };
}


