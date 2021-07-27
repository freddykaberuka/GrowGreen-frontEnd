import React from 'react'
import image3 from '../../../../assets/images/thanks.jpeg'
import { Link } from 'react-router-dom'
function Offices() {
    return (
        <div>
            <div className="card-deck mb-3 pl-5 h-15 d-inline-block card-align">
                <figure class="image-block">
	                <img src={image3} alt="" />
	                <figcaption>
                
		                <h3>
			                Our Office
		                </h3>
		                <p>Join Talented team doing work that matters</p>
		                <button>
			                <Link to='/office' style={{textDecoration:'none', color:'white'}}>Found out More</Link>
		                </button>
	                </figcaption>
                </figure>
            </div>

        </div>
    )
}

export default Offices
