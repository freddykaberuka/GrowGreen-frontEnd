import React from 'react'
import './section1.scss'
import Vision from './vision'
import Offices from './office'
import Contact from './contactus'



function ThirdAbout() {
    return (
        <div className="flex  justify-content-center secondsec mt-3">
            <Vision/>
            <Offices/>
            <Contact/>
        </div>
    )
}

export default ThirdAbout
