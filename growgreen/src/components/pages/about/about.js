import React from 'react'
import Footer from '../footer/footer'
import Subscribe from '../footer1/subscribe/subscribe'
import Sliders from '../landing/sliders'
import Slider from './slider'
import Slidess from './slidess'
import Welcome from './welcome'
import './about.css'
import SecondAbout from './about2/secondAbout'
import Footer1 from '../footer1/footer1'

function About() {
    return (
        <div>
            <Sliders/>
            <h1 className='heading'>About Us</h1>
            <div className='d-flex mt-10'>
                <Welcome/>
            </div>
            <SecondAbout/>
            <Footer1/>
            <Footer/>
        </div>
    )
}

export default About