import React from 'react'
import logo from '../../assets/images/ggr-logo.jpg'
import timer from '../../assets/images/timer-icon.jpg'
import emails from '../../assets/images/email-icon.png'
import calls from '../../assets/images/call-icon.png'
function Header() {
    return (
        <div className='d-flex'>
           <div className="logo col-md-1">
                <img src={logo}/>
           </div>
    <div className="timing d-flex pt-3"><div className='col-md-3'><img src={timer}/></div><div><h2>Opening Time</h2><p>Mon-Sat:7:00-17:00</p></div></div>
           <div className="emails d-flex pt-3"><div className='col-md-2'><img src= { emails}/></div><div>Send us Email<p>growgreenrwanda@gmail.com</p></div></div>
           <div className="calls d-flex pt-3"><div className='col-md-3'><img src={ calls }/></div><div>Call Us<p>0781964133</p></div></div>
        </div>
    )
}

export default Header
