import React from 'react'
import image1 from '../../../assets/images/planting.jpeg'
import image2 from '../../../assets/images/image3.jpg'
import image3 from '../../../assets/images/thanks.jpeg'
function WelcImage() {
    return (
        <div>
            <div className="card-deck pt-3 pr-10">
                <div className="card">
                    <img className="card-img-top fit-image" src={image1} alt="Card image cap"/>
                </div>
                
            </div>
        </div>
    )
}

export default WelcImage
