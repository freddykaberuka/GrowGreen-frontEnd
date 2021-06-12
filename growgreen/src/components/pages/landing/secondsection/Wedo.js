import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'

function Wedo() {
    return (
        <div>
            <div className="card-deck mt-3 mb-3 ml-5 h-15">
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

export default Wedo
