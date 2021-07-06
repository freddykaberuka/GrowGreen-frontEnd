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
import Header from '../../header/header'
import Abouts from './abouts'
import ThirdAbout from './about3/thirdAbout'

function About() {
    return (
        <div>
            <div>
            <Header/>
            </div>
            <Abouts/>
            <SecondAbout/>
            <ThirdAbout/>
            <Footer1/>
            <Footer/>
        </div>
    )
}

export default About