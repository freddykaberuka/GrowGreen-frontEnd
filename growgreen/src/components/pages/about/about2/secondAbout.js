import React from 'react'
import Leadership from './leadership'
import Mission from './mission'
import Purpose from './purpose'
import './section1.scss'
import Vision from '../about3/vision'



function SecondAbout() {
    return (
        <div className="flex  justify-content-center secondsec">
           <Purpose/>
           <Mission/>
           <Leadership/>
        </div>
    )
}

export default SecondAbout
