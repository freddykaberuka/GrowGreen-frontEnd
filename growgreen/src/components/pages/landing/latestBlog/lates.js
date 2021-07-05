import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'
import image2 from '../../../../assets/images/image3.jpg'
import image3 from '../../../../assets/images/thanks.jpeg'
import {NavLink, Link} from 'react-router-dom'
import './latest.css'
function Lates() {
    return (
        <div className='flex justify-center cards'>
          <div class="col-sm-3">
            <Link to='/singleBlog' style={{ textDecoration: 'none' }}>
              <div class="card">
                <img src={image1} class="card-img-top card-image" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title"><small>Meeting of Board With Farmers</small></h5>
                </div>
              </div>
              </Link>
            </div>
            
            <div class="col-sm-3">
              <Link to ='#' style={{ textDecoration: 'none' }}>
              <div class="card">
                <img src={image1} class="card-img-top card-image" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title"><small>Meeting of Board With Farmers</small></h5>
                </div>
              </div>
              </Link>
            </div>
            <div class="col-sm-3">
              <Link to ='#' style={{ textDecoration: 'none' }}>
              <div class="card">
                <img src={image1} class="card-img-top card-image" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title"><small>Meeting of Board With Farmers</small></h5></div>
                </div>
                </Link>
              </div>
            </div> 
    )
}

export default Lates;

