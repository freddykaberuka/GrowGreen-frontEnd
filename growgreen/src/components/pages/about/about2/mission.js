import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'

function Mission() {
    return (
        <div>
            <div className="card-deck mb-3 ml-5 h-15 d-inline-block">
                <figure class="image-block">
	                <img src={image1} alt="" />
	                <figcaption>
		                <h3>
			                What We Do
		                </h3>
		                <p>A vegetable garden, in the beginning, looks promising, and then after all little by little, it grows. Nothing but vegetables😍</p>
		                <button>
			                More Info
		                </button>
	                </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Mission
