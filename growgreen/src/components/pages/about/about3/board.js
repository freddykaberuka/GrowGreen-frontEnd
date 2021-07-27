import React from 'react'
import image2 from '../../../../assets/images/image3.jpg'

function Board() {
    return (
        <div>
           <div className="card-deck mb-3 pl-5 h-15 d-inline-block card-align">
            <figure class="image-block">
	        <img src={image2} alt="" />
	        <figcaption>
                
		    <h3>
			Board and Advisors
		</h3>
		<p>Our Impact is Our North Star,In Everything that we do,we seek to generate Positive impact in the lives of Famers.</p>
		<button>
			More Info
		</button>
	</figcaption>
</figure>
</div> 
        </div>
    )
}

export default Board
