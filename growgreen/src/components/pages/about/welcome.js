import React from 'react'
import image2 from '../../../assets/images/image3.jpg'
import Slider from './slider'
import Slidess from './slidess'
import image1 from '../../../assets/images/planting.jpeg'
import './about.css'

function Welcome() {
    return (
        <div className='welcomes d-flex pl-3 pr-3'>
            <div className="abouts d-flex">
            <div className='welcome w-75 ml-4'>
                <h2>WELCOME TO GROW GREEN RWANDA</h2>
            <p>Grow Green Rwanda is a women non-govermental 
organization that promotes climate-resilient peri-urban agriculture
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
<p>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
<p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
<p>irure dolor in reprehenderit in voluptate velit esse cillum dolore </p>
<p>eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non </p>
<p>proident, sunt in culpa qui officia deserunt mollit anim id est </p>
laborum
            </div>
            <div className='photoSlide col-sm-5'>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="col-md-10">
                        <div className="card">
                            <img className="card-img-top" src={image1} alt="Card image cap"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Welcome
