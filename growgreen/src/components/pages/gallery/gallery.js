import React from 'react'
// import './blog.css'
import image2 from '../../../assets/images/image3.jpg'
import image3 from '../../../assets/images/2.jpeg'
import image4 from '../../../assets/images/grow lunching.jpeg'
import Header from '../../../../src/components/header/header'
import Subscribe from '../../../../src/components/pages/footer1/subscribe/subscribe'
import Footer from '../../../../src/components/pages/footer/footer'

function Gallery() {
    return (<div>
        <Header/>
        <div className="article-body">
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
<Subscribe/>
<Footer/>
</div>
        </div>
    )
}

export default Gallery
