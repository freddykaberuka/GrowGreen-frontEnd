import React from 'react'
import './singlePages.css'
import { Link } from 'react-router-dom'
import Purpose from '../about2/purpose'

function Aside() {
    return (
        <div className='mt-20 mb-4 aside'>
            <h5 className='line-cads'>INSIDE ABOUT US</h5>
            <ul className="listing-aside line-cads" style={{textDecoration: 'none', color:'black'}}>
                <li><Link to='/purpose'>Purpose and Values</Link></li>
                <li><Link to='/mission'>Our Vision</Link></li>
                <li><Link to='/leadership'>Leadership</Link></li>
                <li><Link to='/office'>Our Offices</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Aside
