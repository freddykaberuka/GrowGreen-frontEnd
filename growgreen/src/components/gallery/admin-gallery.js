import React from 'react'
import image2 from '../../assets/images/image3.jpg'
import image3 from '../../assets/images/2.jpeg'
import image4 from '../../assets/images/grow lunching.jpeg'

function Photo() {
    return (
        <div>
            <p>Media Library <button type="button" className="btn btn-light" style={{color:'blue'}}>Add New</button></p>
            <div className="row g-4 mb-20 mt-20">
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image3} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image2} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image4} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image3} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image3} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image2} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image2} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card mt-3">
      <img src={image2} className="card-img-top card-image" alt="..."/>
    </div>
  </div>
</div>
        </div>
    )
}

export default Photo
