import './styles/output.css'
import Blog from './components/pages/blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Detail from './components/pages/blog/Detail';
import HeaderAdmin from './components/common/SidebarAdmin';
import Editor from './components/common/Editor';
import firebaseInit from './utils/firebase';
import { getAuth } from "firebase/auth";
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from './redux/auth/actions/api';

function App() {
  firebaseInit();
  const auth = getAuth();
  const dispatch = useDispatch();

  const [] = useState([]);
  // const blogs = useSelector(state => state.login)


  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     // User logged in already or has just logged in.
  //     console.log('init login check',user);
  //   } else {
  //     console.log('not logged in');
  //     // User not logged in or has just logged out.
  //   }
  // });


  // console.log('app js ',auth.currentUser);
  return (
    <Router>
      <Header />
      <div className='grid grid-cols-6'>
        {!auth.currentUser ? <div className=''><HeaderAdmin /> </div> : <></>}





        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className={!auth.currentUser ? 'col-span-5' : 'col-span-6'}>
          <Switch>
            <Route path="/about">
              <Blog />
            </Route>
            <Route path="/users">
              <Blog />
            </Route><Route path="/signin">
              <SignIn />
            </Route><Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/:details/:slug">
              <Detail />
            </Route>
            <Route path="/editor">
              {/* <h1>hello from editor</h1> */}
              <Editor />
            </Route>
            <Route path="/">
              <Blog />
            </Route>

          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
