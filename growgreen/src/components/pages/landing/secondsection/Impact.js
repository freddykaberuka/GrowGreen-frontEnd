import React from 'react'
import image2 from '../../../../assets/images/image3.jpg'
import SingleImpact from './singleImpact'
import { Link } from 'react-router-dom'

function Impact() {
    return (
        <div>
			<div className="impact card-deck mb-3 ml-5 h-15 d-inline-block">
		<figure class="image-block">
			<img src={image2} alt="" />
			<figcaption>
				<h3>Our Impact</h3>
				<p>Our Impact is Our North Star,In Everything that we do,we seek to generate Positive impact in the lives of Famers.</p>
				<button><Link to='/impact'>More Info</Link></button>
			</figcaption>
		</figure>
	</div> 
        </div>
    )
}

export default Impact
