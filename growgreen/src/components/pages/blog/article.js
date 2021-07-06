import React from 'react'
import './blog.css'
import image2 from '../../../assets/images/image3.jpg'
import image3 from '../../../assets/images/2.jpeg'
import image4 from '../../../assets/images/grow lunching.jpeg'

function Article() {
    return (
        <div className="article-body mt-4">
          <h2 className='intro mb-4'>Latest Articles</h2>
           <div class="cads mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={image2} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Meeting of Board With Farmers</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            </div>

            <div class="cads mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={image3} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Quality of our seeds</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            </div>
            <div class="cads mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={image4} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Launching Grow Green Rwanda</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            </div>
            <spam>1/3</spam>
            <div className='flex justify-center'>
              
              <div className="next justify-center">
                <button type="button" class="btn btn-primary">Next</button></div>
            </div>
          </div>

    )
}

export default Article
