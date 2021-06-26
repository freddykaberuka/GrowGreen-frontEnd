import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'
import { Link } from 'react-router-dom'
import SingleWedo from './singleWedo'
function Wedo() {
    return (
        <div>
			<div className="card-deck mb-3 d-inline-block">
            	<figure class="image-block">
	        		<img src={image1} alt="" />
	        		<figcaption>
		    			<h3>What We Do</h3>
						<p>A vegetable garden, in the beginning, looks promising, and then after all little by little, it grows. Nothing but vegetables😍</p>
						<button><Link to='/wedo'>More Info</Link></button>
					</figcaption>
				</figure>
			</div> 
        </div>
    )
}

export default Wedo
