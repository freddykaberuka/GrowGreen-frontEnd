import React from 'react'
import './singlePages.css'
import { Link } from 'react-router-dom'
import Purpose from '../about2/purpose'

function Aside() {
    return (
        <div className='mt-20 mb-4 aside'>
            <h5 className='line-cads'>INSIDE ABOUT US</h5>
            <ul className="listing-aside line-cads" style={{textDecoration: 'none', color:'black'}}>
                <li><Link to='#'>Purpose and Values</Link></li>
                <li><Link to=''>Our Vision</Link></li>
                <li><Link to=''>Leadership</Link></li>
                <li><Link to=''>Our Offices</Link></li>
                <li><Link to=''>Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Aside
