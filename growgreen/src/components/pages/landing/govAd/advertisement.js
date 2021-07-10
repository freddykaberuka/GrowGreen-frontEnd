import React from 'react'
import './ads.css'
import logo from '../../../../assets/images/logo.jpg'

function Ads() {
    return (
        <div className='content-ads'>
            <div class="curved-div">
                <h2 className='card-header text-center heading'>Delivering a Health Response to COVID-19</h2>
                <div className='blockquote mb-3 text-center'>
                    At a time of a global health crisis, we are drawing on our deep delivery expertise and trusted community ties                                                    
                    to respond to emerging farmer needs.
                </div>
                <div className='text-center'><a href="#" class="btn btn-primary">Read More</a></div>
                <svg viewBox="0 0 1440 319">
                    <path fill="#fff" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                </div>  
               <div className='imag-logo'>
                    <img src={logo} class="mx-auto d-block rounded-circle saturate brightness rss opacity"/>
                    </div>
                
        </div> 
    )
}

export default Ads
