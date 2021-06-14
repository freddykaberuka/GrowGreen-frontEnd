import React from 'react'
import WelcImage from './welcImage'
import Welcome from './welcome'

function About() {
    return (
        <div>
            <h1 className='heading-about pt-3 '>About Us</h1>
            <div className='d-flex pb-4'>
            <Welcome/>
            <WelcImage/>
            </div>
            
        </div>
    )
}

export default About
