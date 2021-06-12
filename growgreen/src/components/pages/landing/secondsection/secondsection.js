import React from 'react'
import Impact from './Impact'
import './ticket.scss'
import Wedo from './Wedo'
import WorkWithUs from './workWithUs'


function Secondsect() {
    return (
        <div className="d-flex  justify-content-center secondsec">
           <Wedo/>
           <Impact/>
           <WorkWithUs/>
        </div>
    )
}

export default Secondsect