import React from 'react'
import image1 from '../../../../assets/images/planting.jpeg'
import image2 from '../../../../assets/images/image3.jpg'
import image3 from '../../../../assets/images/thanks.jpeg'
function Latest() {
    return (
        <div>
            <div className="card-deck mt-5 col-sm-12 row-cols-1">
                <h1 className='pl-10'>Latest Blogs</h1>
                <div className="card">
                    <img className="card-img-top row-cols-1 fit-image" src={image1} alt="Card image cap"/>
                    <div className='font-weight-normal'>Meeting of Board With Farmers<p className='font-italic'>06,April,2021</p></div>
                </div>
                <div class="card">
                    <img className="card-img-top fit-image" src={image2} alt="Card image cap"/>
                    <div className='font-weight-normal'>Quality of our seeds<p className='font-italic'>29,march.2021</p></div>
                </div>
                <div class="card">
                    <img className="card-img-top fit-image" src={image2} alt="Card image cap"/>
                    <div className='font-weight-normal'>Launching Grow Green Rwanda <p className='font-italic'>20,December,2020</p></div>
                </div>
                
            </div>
        </div>
    )
}

export default Latest;
