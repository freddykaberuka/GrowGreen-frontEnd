import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Subscribe from './components/pages/footer1/subscribe/subscribe';
import Footer1 from './components/pages/footer1/footer1';
import Footer from './components/pages/footer/footer';
import Contacts from './components/pages/Contacts';
import Links from './components/pages/landing/links';
import NavBar from './components/NavBar'
import landings from './assets/images/ggr-background1.jpg'
import Blogs from './components/pages/Blogs';
function App() {
  return (
    <div className="App">
      <Links/>
      <div className="pt-10 pl-14 pb-10">
      <Contacts/>
      </div>
     <Subscribe/>
     
     <Footer/>
    </div>
  );
}

export default App;
