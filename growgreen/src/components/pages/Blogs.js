/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import image1 from '../../assets/images/planting.jpeg'
import image2 from '../../assets/images/image3.jpg'
import image3 from '../../assets/images/thanks.jpeg'

function Blogs() {
    return (
        <div>
            
            <div className="card-deck mt-5 col-sm-12 blog-card">
                <div className="card">
                    <img className="card-img-top blogs" src={image1} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Meeting of Board With Farmers</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top blogs" src={image2} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Quality of our seeds</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
                <div className="card">
                    <img className="card-img-top blogs" src={image3} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Launching Grow Green Rwanda </h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top blogs" src={image3} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Launching Grow Green Rwanda </h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Blogs
