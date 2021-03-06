import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/pages/landing/home';
import Blog from './components/pages/blog/blog'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Topheader from './components/topheader';
import About from './components/pages/about/about';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/pages/contact/contact';
// import Gallery from './components/pages/gallery/gallery';
// import SingleWedo from './components/pages/landing/secondsection/singleWedo';
// import SingleImpact from './components/pages/landing/secondsection/singleImpact';
// import SingleWork from './components/pages/landing/secondsection/singleWork';
import Blogging from './components/pages/blog/blog1';
import SinglePurpose from './components/pages/about/pages/singlePurpose';
import SingleMission from './components/pages/about/pages/singleMission';
import SingleLeadership from './components/pages/about/pages/singleLeadership';
import SingleOffice from './components/pages/about/pages/singleOffice';
import SingleWedo from './components/pages/about/pages/singleWhatwedo';
import SingleImpact from './components/pages/about/pages/singleImpact';
import SingleWork from './components/pages/about/pages/singleWork';
import Dashboard from './components/Dashboard/dashboard-view';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} exact={ true }/>
          <Route path='/article' component={Blog}/>
          <Route path='/about' component ={About}/>
          <Route path='/contact' component ={Contact}/>
          {/* <Route path='/photo' component ={Gallery} /> */}
          <Route path='/wedo' component={SingleWedo}/>
          {/* <Route path='/impact' component={SingleImpact}/> */}
          {/* <Route path='/work' component={SingleWork}/> */}
          <Route path='/singleblog' component={Blogging}/>
          <Route path='/purpose' component={SinglePurpose}/>
          <Route path='/mission' component={SingleMission}/>
          <Route path='/leadership' component={SingleLeadership}/>
          <Route path='/whatwedo' component={SingleWedo}/>
          <Route path='/impact' component={SingleImpact}/>
          <Route path='/workwithus' component={SingleWork}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
