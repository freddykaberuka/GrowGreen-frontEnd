import logo from '../assets/images/ggr-logo.jpg';
import timer from '../assets/images/timer-icon.jpg';
import emails from '../assets/images/email-icon.png';
import React from 'react'

function header() {
    return (
        <div>
          <img src={logo} className="App-logo" alt="logo"/>
          <img src={timer} className="App-logo" alt="logo"/>
          <img src={emails} className="App-logo" alt="logo"/>  
        </div>
    )
}
export default header;
