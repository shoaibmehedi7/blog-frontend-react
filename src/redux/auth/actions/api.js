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
        dispatch(fetchLoginSuccess(JSON.stringify(user)));
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
        dispatch(fetchLoginSuccess(JSON.stringify(user)));
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
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchLoginSuccess(user));
      } else {
        dispatch(fetchLoginError());
      }
    });
  };
}


export function signOut() {
  return (dispatch) => {
    dispatch(fetchLoginRequest());
    const auth = getAuth();
    auth.signOut().then(function() {
      console.log('Signed Out');
      dispatch(fetchLoginSuccess());

    }, function(error) {
      console.error('Sign Out Error', error);
      dispatch(fetchLoginSuccess());

    });
  };
}


