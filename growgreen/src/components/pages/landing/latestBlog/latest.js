import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'
import image2 from '../../../../assets/images/image3.jpg'
import image3 from '../../../../assets/images/thanks.jpeg'
import './latest.css'
function Latest() {
    return (
        <div>
            <div className="card-deck mt-5 latest-article">
                <h1 className='ml-2 pl-40 color'>Latest Blogs</h1>
                <div class="row g-4 mb-4 mt-3  justify-center">
  
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image1} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Meeting of Board With Farmers</h5>
        </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image1} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Meeting of Board With Farmers</h5>
        </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image1} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Meeting of Board With Farmers</h5></div>
    </div>
  </div>
  </div>
                
            </div>
        </div>
    )
}

export default Latest;
