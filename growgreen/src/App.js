import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Service from './components/pages/Services'
import landings from './assets/images/ggr-background1.jpg'
import Gallery from './components/pages/Gallery';
import NewNav from './components/pages/landing/newNav';
// import { Card } from 'react-bootstrap';
import Ads from './components/pages/landing/govAd/advertisement';
import Latest from './components/pages/landing/latestBlog/latest';
import Subscribe from './components/pages/footer1/subscribe/subscribe';
import Footer1 from './components/pages/footer1/footer1';
import Footer from './components/pages/footer/footer';
import Sliders from './components/pages/landing/sliders';
import Impact from './components/pages/landing/short-info/impact';
import Secondsect from './components/pages/landing/secondsection/secondsection';
import Home from './components/pages/landing/home';
// import ContentInfo from './components/pages/landing/short-info/contentInfo';
function App() {
  return (
    <div className="App">
      
      {/* <Header /> */}
     {/* <NavBar /> */}
     {/* <NewNav/> */}
     {/* <Contacts/> */}
     <Home/>
     {/* <Impact/> */}
     {/* <ContentInfo/> */}
     {/* <Gallery/> */}
     
     {/* <Card/> */}
     
     <Subscribe/>
     <Footer1/>
     <Footer/>
    </div>
  );
}

export default App;
