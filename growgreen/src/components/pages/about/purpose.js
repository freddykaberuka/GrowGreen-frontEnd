import React from 'react'
import image1 from '../../../assets/images/planting.jpeg'
import image2 from '../../../assets/images/image3.jpg'
import image3 from '../../../assets/images/thanks.jpeg'

function Purpose() {
    return (
        <div>
            <div>
            <div className="card-deck mt-5 col-sm-12 row-cols-1 pb-6">
                <div className="card">
                    <img className="card-img-top row-cols-1 fit-image" src={image1} alt="Card image cap"/>
                    <div className='font-weight-normal pt-4 title pb-3'>Purpose and Value</div>
                </div>
                <div class="card">
                    <img className="card-img-top fit-image" src={image2} alt="Card image cap"/>
                    <div className='font-weight-normal pt-4 title pb-3'>Our Mission</div>
                </div>
                <div class="card">
                    <img className="card-img-top fit-image" src={image2} alt="Card image cap"/>
                    <div className='font-weight-normal pt-4 title pb-3'>Leadership</div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Purpose
