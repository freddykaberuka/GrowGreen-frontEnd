import React from 'react'
import image2 from '../../../assets/images/image3.jpg'

function Slider() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
    )
}

export default Slider