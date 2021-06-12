import React from 'react'
import './impact.js'
import image1 from '../../../../assets/images/planting.jpeg'

function Impact() {
    return (
        <div>
           <div class="container">
                <div class="card">
                    <div class="imgBx">
                        <img src={image1}/>
                    </div>
                    <div class="contentBx">
                        <h2>Nike Shoes</h2>
                        <div class="size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div class="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Impact
