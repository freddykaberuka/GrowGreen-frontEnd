import React from 'react'
import image3 from '../../../../assets/images/thanks.jpeg'
import { Link } from 'react-router-dom'
function Leadership() {
    return (
        <div>
            <div className="card-deck mb-3 ml-5 d-inline-block">
                <figure class="image-block">
	                <img src={image3} alt="" />
	                <figcaption>
                
		                <h3>
			                Leadership
		                </h3>
		                <p>Join Talented team doing work that matters</p>
		                <button>
			                <Link to='/leadership' style={{textDecoration:'none', color:'white'}}>Found out More</Link>
		                </button>
	                </figcaption>
                </figure>
            </div>

        </div>
    )
}

export default Leadership
