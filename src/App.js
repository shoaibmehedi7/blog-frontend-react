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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';

function App() {
  firebaseInit();
  const auth = getAuth();
  console.log(auth.currentUser);
  return (
    <Router>
      <Header />

      <div className='grid grid-cols-6'>
        <div className=''>
          {auth.currentUser? <HeaderAdmin /> : <></>}
        </div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className='col-span-5'>
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
