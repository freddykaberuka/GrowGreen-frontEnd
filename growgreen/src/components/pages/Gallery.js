/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import image1 from '../../assets/images/planting.jpeg'
import image2 from '../../assets/images/image3.jpg'
import image3 from '../../assets/images/thanks.jpeg'
function Gallery() {
    return (
        <div>
            <div className="card-deck mt-5 col-sm-12">
                <div className="card">
                    <img className="card-img-top" src={image1} alt="Card image cap"/>
                </div>
                <div class="card">
                    <img className="card-img-top" src={image2} alt="Card image cap"/>
                </div>
                <div className="card">
                    <img className="card-img-top" src={image3} alt="Card image cap"/>
                </div>
                
            </div>
        </div>
    )
}

export default Gallery
