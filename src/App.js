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

function App() {
  return (
    <Router>
      <div className=''>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Blog />
          </Route>
          <Route path="/users">
            <Blog />
          </Route>
          <Route path="/:details/:slug">
            <Detail/>
          </Route>
          <Route path="/">
            <Blog />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
