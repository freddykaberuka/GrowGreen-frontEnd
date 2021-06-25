import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/pages/landing/home';
import Blog from './components/pages/blog/blog'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Topheader from './components/topheader';
import About from './components/pages/about/about';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/pages/contact/contact';
import Gallery from './components/pages/gallery/gallery';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} exact={ true }/>
          <Route path='/article' component={Blog}/>
          <Route path='/about' component ={About}/>
          <Route path='/contact' component ={Contact}/>
          <Route path='/photo' component ={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
