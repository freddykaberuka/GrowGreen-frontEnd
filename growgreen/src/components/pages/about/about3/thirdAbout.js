import React from 'react'
import './section1.scss'
import Vision from './vision'
import Offices from './office'
import Contact from './contactus'



function ThirdAbout() {
    return (
        <div className="d-flex  justify-content-center secondsec">
            <Vision/>
            <Offices/>
            <Contact/>
        </div>
    )
}

export default ThirdAbout
