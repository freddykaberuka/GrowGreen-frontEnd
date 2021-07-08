import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'
import { Link } from 'react-router-dom'

function Mission() {
    return (
        <div>
            <div className="card-deck mb-3 ml-5 d-inline-block">
                <figure class="image-block">
	                <img src={image1} alt="" />
	                <figcaption>
		                <h3>
			                Vision and Mission
		                </h3>
		                <p>Our Impact is Our North Star,In Everything that we do,we seek to generate Positive impact in the lives of Famers.</p>
		                <button>
			                <Link to='/mission' style={{textDecoration:'none', color:'white'}}>Found out More</Link>
		                </button>
	                </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Mission
