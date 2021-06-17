import React from 'react'
import './blog.css'
import image2 from '../../../assets/images/image3.jpg'
import image3 from '../../../assets/images/2.jpeg'
import image4 from '../../../assets/images/grow lunching.jpeg'

function Article() {
    return (
        <div className="article-body">
            <div class="row g-4 mb-20 mt-20">
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image3} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Meeting of Board With Farmers</h5>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image2} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Quality of our seeds</h5>
        <p class="card-text"><small class="text-muted">29,march.2021</small></p></div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image4} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Launching Grow Green Rwanda </h5>
        <p class="card-text"><small class="text-muted">20,December,2020</small></p></div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image3} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Meeting of Board With Farmers</h5>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image3} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Meeting of Board With Farmers</h5>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image2} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"><small class="text-muted">06,April,2021</small></p></div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image2} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"><small class="text-muted">06,April,2021</small></p></div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card mt-3">
      <img src={image2} class="card-img-top card-image" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"><small class="text-muted">06,April,2021</small></p></div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Article
