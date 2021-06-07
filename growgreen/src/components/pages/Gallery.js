/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import image1 from '../../assets/images/planting.jpeg'
import image2 from '../../assets/images/image3.jpg'
import image3 from '../../assets/images/thanks.jpeg'
import './garelly.css'

function Gallery() {
    return (
        <div className='galler'>
            <div className="card-deck mt-3 justify-content-center">
                <div className="card">
                    <img className="card-img-top fit-image" src={image1} alt="Card image cap"/>
                </div>
                <div class="card">
                    <img className="card-img-top fit-image" src={image2} alt="Card image cap"/>
                </div>
                <div class="card">
                    <img className="card-img-top fit-image" src={image2} alt="Card image cap"/>
                </div>
                
            </div>
        </div>
    )
}

export default Gallery
