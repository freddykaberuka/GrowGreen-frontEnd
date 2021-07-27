import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div>
            <div className="card-deck mb-3 pl-5 h-15 d-inline-block card-align">
                <figure class="image-block">
	                <img src={image1} alt="" />
	                <figcaption>
		                <h3>
			                Contact us
		                </h3>
		                <p>Contact us with Messaging and email</p>
		                <button>
			                <Link to='/contact' style={{textDecoration:'none', color:'white'}}>Found out More</Link>
		                </button>
	                </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Contact
