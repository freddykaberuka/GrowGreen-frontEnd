import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
// import Header from './components/header'
// import Landing from './components/pages/landing'
import Service from './components/pages/Services'
import landings from './assets/images/ggr-background1.jpg'
import Contacts from './components/pages/Contacts';
import Gallery from './components/pages/Gallery';
import NewNav from './components/pages/newNav';
import { Card } from 'react-bootstrap';
import Ads from './components/pages/govAd/advertisement';
import Latest from './components/pages/latestBlog/latest';
import Subscribe from './components/pages/subscribe/subscribe';
function App() {
  return (
    <div className="App" styles={{ backgroundImage:`url(${landings})` }}>
      
      {/* <Header /> */}
     {/* <NavBar /> */}
     <NewNav/>
     {/* <Contacts/> */}
     <Gallery/>
     {/* <Card/> */}
     <Ads/>
     <Latest/>
     <br/><br/>
     <Subscribe/>
    </div>
  );
}

export default App;
