import React from 'react'
import Impact from './Impact'
import './section2.scss'
import Wedo from './Wedo'
import WorkWithUs from './workWithUs'



function Secondsect() {
    return (
        <div className="flex mt-3 justify-content-center secondsec">
           <Wedo/>
           <Impact/>
           <WorkWithUs/>
        </div>
    )
}

export default Secondsect
