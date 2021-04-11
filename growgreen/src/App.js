import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
// import Header from './components/header'
// import Landing from './components/pages/landing'
import Service from './components/pages/Services'
import landings from './assets/images/ggr-background1.jpg'
function App() {
  return (
    <div className="App" styles={{ backgroundImage:`url(${landings})` }}>
      {/* <Header /> */}
     <NavBar />
     {/* <Landing/> */}
     <Service />
    </div>
  );
}

export default App;
