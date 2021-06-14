import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Subscribe from './components/pages/footer1/subscribe/subscribe';
import Footer1 from './components/pages/footer1/footer1';
import Footer from './components/pages/footer/footer';

import Sliders from './components/pages/landing/sliders';
import About from './components/pages/about/about';
// import ContentInfo from './components/pages/landing/short-info/contentInfo';
function App() {
  return (
    <div className="App">
      
     <Sliders/>
     <About/>
     
     <Subscribe/>
     <Footer1/>
     <Footer/>
    </div>
  );
}

export default App;



