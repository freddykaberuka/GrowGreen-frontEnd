import React from 'react'
import './blog.css'
import image2 from '../../../assets/images/image3.jpg'
import image3 from '../../../assets/images/2.jpeg'
import image4 from '../../../assets/images/grow lunching.jpeg'
import { Link } from 'react-router-dom'

function Article() {
    return (
        <div className="article-body mt-4">
          <h2 className='intro mb-4'>Latest Articles</h2>
           <div className='cads'>
             <Link to="#" style={{ textDecoration: 'none', color:'black' }}>
            <div className="mb-3 mt-3">
            <div className="row g-0">
              <div className="col-lg-3">
                <img src={image3} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title heading-item">Meeting of Board With Farmers</h2>
                  <p className="card-text listing__item__description listing__item__meta">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt sapien eget ultricies posuere. In blandit maximus condimentum. Etiam viverra vehicula fringilla. Mauris at dignissim nunc. Vestibulum ac auctor</p>
                  <p className="card-text listing__item__meta"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            </div>
            </Link>
            </div>
            <div className='cads'>
              <Link to="#" style={{ textDecoration: 'none', color:'black' }}>
            <div className="mb-3 mt-3">
            <div className="row g-0">
              <div className="col-lg-3">
                <img src={image2} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title heading-item">Meeting of Board With Farmers</h2>
                  <p className="card-text listing__item__description listing__item__meta">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt sapien eget ultricies posuere. In blandit maximus condimentum. Etiam viverra vehicula fringilla. Mauris at dignissim nunc. Vestibulum ac auctor</p>
                  <p className="card-text listing__item__meta"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            </div>
            </Link>
            </div>
            <div className='cads'>
              <Link to="#" style={{ textDecoration: 'none', color:'black' }}>
            <div className="mb-3 mt-3">
            <div className="row g-0">
              <div className="col-lg-3">
                <img src={image3} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title heading-item">Three Tips to Help your Farmer in East Africa</h2>
                  <p className="card-text listing__item__description listing__item__meta">In blandit maximus condimentum. Etiam viverra vehicula fringilla. Mauris at dignissim nunc. Vestibulum ac auctor</p>
                  <p className="card-text listing__item__meta"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            </div>
            </Link>
            </div>
            <div className='cads'>
              <Link to="#" style={{ textDecoration: 'none', color:'black' }}>
            <div className="mb-3 mt-3">
            <div className="row g-0">
              <div className="col-lg-3 images">
                <img src={image2} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title heading-item">Quality of our seeds</h2>
                  <p className="card-text listing__item__description listing__item__meta">Aenean porta, metus vel malesuada condimentum, libero quam vulputate arcu, eu maximus velit elit quis turpis. Vestibulum tincidunt arcu ex, in tempor velit sodales ut. Nullam </p>
                  <p className="card-text listing__item__meta"><small className="text-muted">29 August 2020</small></p>
                </div>
              </div>
            </div>
            </div>
            </Link>
            </div>
            <div className='cads'>
              <Link to="#" style={{ textDecoration: 'none', color:'black' }}>
            <div className="mb-3 mt-3">
            <div className="row g-0">
              <div className="col-lg-3">
                <img src={image4} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title heading-item">Launching Grow Green Rwanda</h5>
                  <p className="card-text listing__item__meta">Cras id porta odio. Maecenas libero leo, blandit rutrum tristique eu, ultrices a mi. Donec convallis pulvinar vehicula. Morbi consectetur odio a neque condimentum</p>
                  <p className="card-text listing__item__meta"><small className="text-muted">29 May 2020</small></p>
                </div>
              </div>
            </div>
            </div>
            </Link>
            </div>
            <spam>1/3</spam>
            <div className='flex justify-center'>
              
              <div className="next justify-center">
                <button type="button" className="btn btn-primary next-btn">Next</button></div>
            </div>
          </div>

    )
}

export default Article
