import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
<<<<<<< HEAD
import Home from './components/pages/landing/home';
import Blog from './components/pages/blog/blog'
<<<<<<< HEAD
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Topheader from './components/topheader';
import About from './components/pages/about/about';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/pages/contact/contact';
=======
// import ContentInfo from './components/pages/landing/short-info/contentInfo';
=======
import NavBar from './components/NavBar'
import Service from './components/pages/Services'
import landings from './assets/images/ggr-background1.jpg'
import Gallery from './components/pages/Gallery';
import NewNav from './components/pages/landing/newNav';
import Ads from './components/pages/landing/govAd/advertisement';
import Latest from './components/pages/landing/latestBlog/latest';
import Subscribe from './components/pages/footer1/subscribe/subscribe';
import Footer1 from './components/pages/footer1/footer1';
import Footer from './components/pages/footer/footer';
import Sliders from './components/pages/landing/sliders';
import Impact from './components/pages/landing/short-info/impact';
import Secondsect from './components/pages/landing/secondsection/secondsection';
=======
>>>>>>> f95e30d (changing map size)
import Home from './components/pages/landing/home';
import Blog from './components/pages/blog/blog'
>>>>>>> ce479b9 (modifie section 2 cards)
import {Route, BrowserRouter as Router} from 'react-router-dom'
<<<<<<< HEAD
>>>>>>> 959f45c (add blog)
function App() {
  return (
    <div className="App">
      
=======
import Topheader from './components/topheader';
import About from './components/pages/about/about';
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Topheader/> */}
      
      <div/>
>>>>>>> a27d57d (add tophead page and modifie)
=======
>>>>>>> 6ee08a5 (about page)
      <Router>
<<<<<<< HEAD
        <Switch>
          <Route path='/' exact component={Home} exact={ true }/>
          <Route path='/article' component={Blog}/>
          <Route path='/about' component ={About}/>
          <Route path='/contact' component ={Contact}/>
        </Switch>
=======
        <Route path='/' exact component={Home} />
        <Route path='/article' component={Blog}/>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 959f45c (add blog)
=======
        <Route path='/header' component ={Topheader}/>
>>>>>>> a27d57d (add tophead page and modifie)
=======
        <Route path='/about' component ={About}/>
>>>>>>> 6ee08a5 (about page)
      </Router>
    </div>
  );
}

export default App;
