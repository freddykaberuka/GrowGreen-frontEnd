import React from 'react'
import logo from '../../assets/images/ggr-logo.jpg'
import timer from '../../assets/images/timer-icon.jpg'
import emails from '../../assets/images/email-icon.png'
import calls from '../../assets/images/call-icon.png'
import Links from '../../../src/components/pages/links'
import { FaGooglePlusG } from "react-icons/fa";
import './header.css'

function Header() {
    return (
        <div>
        <div className='flex headding'>
           <div className="logo col-sm-1">
                <img src={logo}/>
           </div>
    <div className="timing d-flex pt-3"><FaGooglePlusG/><div className='pt-3'><strong>Opening Time</strong><p><small>Mon-Sat:7:00-17:00</small></p></div></div>
           <div className="emails d-flex pt-3"><div className='col-sm-2 pt-2'><img src= { emails}/></div><div className='pt-3'><strong>Send us Email</strong><p><small>growgreenrwanda@gmail.com</small></p></div></div>
           <div className="calls d-flex pt-3"><div className='col-md-3 pt-3'><img src={ calls }/></div><div className='pt-3'><strong>Call Us</strong><p><small>0781964133</small></p></div></div>
        </div>
        <Links/>
        </div>
    )
}

export default Header
