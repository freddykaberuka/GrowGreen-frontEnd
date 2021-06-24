import React from 'react'
import image2 from '../../../assets/images/image3.jpg'
<<<<<<< HEAD
=======
import Slider from './slider'
import Slidess from './slidess'
import image1 from '../../../assets/images/planting.jpeg'
>>>>>>> 6ee08a5 (about page)
import './about.css'

function Welcome() {
    return (
<<<<<<< HEAD
        <div className='welcomes d-flex pt-3'>
            <div className='welcome pl-10 w-75'>
                <h2>WELCOME TO GROW GREEN RWANDA</h2>
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
=======
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
>>>>>>> 6ee08a5 (about page)
            </div>
        </div>
    )
}

export default Welcome
