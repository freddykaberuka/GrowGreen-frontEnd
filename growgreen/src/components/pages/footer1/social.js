import React from 'react'
import './footer1.css'
import { FaGoogle, FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
function Social() {
    return (
        <div className='d-flex pl-3 pt-10'>
            <div className='pr-4'>
                <FaFacebook className='icon'/>
            </div>
            <div className='pr-4'>
                <FaInstagram className='icon'/>
            </div>
            <div className='pr-4'>
                <FaTwitter className='icon'/>    
            </div>
            
            <div className='pr-4'>
                <FaGoogle className='icon'/> 
            </div>
           
        </div>
    )
}

export default Social
