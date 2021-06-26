import React from 'react'
import image3 from '../../../../assets/images/thanks.jpeg'
import SingleWork from './singleWork'
import { Link } from 'react-router-dom'
import './singles.css'

function WorkWithUs() {
    return (
        <div>
			<div className="card-deck mb-3 ml-5 h-15 d-inline-block">
            	<figure class="image-block">
	        		<img src={image3} alt="" />
	        		<figcaption>
                
		    			<h3>Work With Us</h3>
						<p>Join Talented team doing work that matters</p>
						<button><Link to='/work'>More Info</Link></button>
					</figcaption>
				</figure>
			</div> 

        </div>
    )
}

export default WorkWithUs
