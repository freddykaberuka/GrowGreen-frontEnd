import React from 'react'
import image2 from '../../../../assets/images/image3.jpg'
import { Link } from 'react-router-dom'

function Purpose() {
    return (
        <div>
           <div className="card-deck mb-3 d-inline-block">
            <figure class="image-block">
	        <img src={image2} alt="" />
	        <figcaption>
                
		    <h3>
			Purpose and Value
		</h3>
		<p>Our Impact is Our North Star,In Everything that we do,we seek to generate Positive impact in the lives of Famers.</p>
		<button>
			<Link to='/purpose' style={{textDecoration:'none', color:'white'}}>Found out More</Link>
		</button>
	</figcaption>
</figure>
</div> 
        </div>
    )
}

export default Purpose
