import React from 'react'
import image2 from '../../../assets/images/image3.jpg'
import Slider from './slider'
import './about.css'
import Slidess from './slidess'
function Welcome() {
    return (
        <div className='welcomes d-flex'>
            <div className='welcome'>
            Grow Green Rwanda is a women non-govermental 
organization that promotes climate-resilient peri-urban agriculture

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
irure dolor in reprehenderit in voluptate velit esse cillum dolore 
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim id est 
laborum
            </div>
            <div className='photoSlide'>
                <Slider/>
            </div>
        </div>
    )
}

export default Welcome
