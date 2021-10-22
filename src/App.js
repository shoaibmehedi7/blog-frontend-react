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

import firebaseInit from './utils/firebase';
import { getAuth } from "firebase/auth";
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from './redux/auth/actions/api';
import Editor from './components/pages/editor/Editor';
import Categories from './components/pages/categories/Categories';

function App() {
  firebaseInit();
  const auth = getAuth();
  const dispatch = useDispatch();

  const [] = useState([]);
  const authData = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);
  return (
    <Router>
      <Header />
      <div className='grid grid-cols-6'>
        {authData.user ? <div className=''><HeaderAdmin /> </div> : <></>}
        <div className={authData.user ? 'col-span-5' : 'col-span-6'}>
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
              <Editor />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route exact path="/">
              <Blog />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
