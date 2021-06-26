import React from 'react'
import Header from '../../../../../src/components/header/header'
import Footer from '../../../../../src/components/pages/footer/footer'
import Subscribe from '../../../../../src/components/pages/footer1/subscribe/subscribe'
import image1 from '../../../../assets/images/planting.jpeg'
import image2 from '../../../../assets/images/image3.jpg'
import image3 from '../../../../assets/images/thanks.jpeg'

import './singles.css'

function SingleWork() {
    return (
        <div>
            <Header/>
            <div className='wedo mrl-6 pl-16 pr-16 pt-5'>
            <h1 className='justify-content'>Work With Us</h1>
            We serve smallholder farmers. In everything we do, we place Farmers First.
            <div className='col-md-5 pb-3 pt-3'><img src={image3}/></div>
            <div className=''>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lectus semper,
            commodo turpis nec, dictum sapien. Maecenas viverra risus eu lectus bibendum, sit amet ornare mi maximus.
            Quisque sed dui a tortor imperdiet viverra a nec libero. Integer at magna a augue venenatis vestibulum nec</p>
            <p>quis ex. Quisque tristique volutpat sapien at vestibulum. Pellentesque at ligula arcu. 
            Nam quis nulla ut libero blandit aliquet non at augue. Nullam suscipit viverra est, quis 
            bibendum tellus venenatis eu. Integer eget neque justo.</p>

            <p>Sed quam est, tempus ut elit in, eleifend mattis dolor. Donec id ex porttitor, consectetur ante eu, 
            elementum odio. Donec augue dui, mattis nec massa eu, consequat tincidunt quam. Suspendisse ac est massa. 
            Aenean ac orci id orci posuere pellentesque. Maecenas ut vestibulum mi. Cras feugiat commodo pretium. 
            Suspendisse et iaculis ligula. Nunc finibus cursus lacus malesuada lacinia. Nunc euismod sapien ac tristique 
            dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat odio, fringilla non commodo at,</p> 
            venenatis a augue. Curabitur laoreet quis metus sed convallis. Duis sit amet purus a lacus vulputate facilisis. 
            Phasellus vel elit malesuada, finibus odio in, elementum urna.
            </div>
            <div className='col-md-5 pb-3 pt-3'><img src={image2}/></div>
            <div className=''>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lectus semper,
            commodo turpis nec, dictum sapien. Maecenas viverra risus eu lectus bibendum, sit amet ornare mi maximus.
            Quisque sed dui a tortor imperdiet viverra a nec libero. Integer at magna a augue venenatis vestibulum nec</p>
            <p>quis ex. Quisque tristique volutpat sapien at vestibulum. Pellentesque at ligula arcu. 
            Nam quis nulla ut libero blandit aliquet non at augue. Nullam suscipit viverra est, quis 
            bibendum tellus venenatis eu. Integer eget neque justo.</p>
            </div>
            <div className='col-md-5 pb-3 pt-3'><img src={image1}/></div>
            <div className=''>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lectus semper,
            commodo turpis nec, dictum sapien. Maecenas viverra risus eu lectus bibendum, sit amet ornare mi maximus.
            Quisque sed dui a tortor imperdiet viverra a nec libero. Integer at magna a augue venenatis vestibulum nec</p>
            <p>quis ex. Quisque tristique volutpat sapien at vestibulum. Pellentesque at ligula arcu. 
            Nam quis nulla ut libero blandit aliquet non at augue. Nullam suscipit viverra est, quis 
            bibendum tellus venenatis eu. Integer eget neque justo.</p>
            </div>

        </div>
        <Subscribe/>
        <Footer/>
        </div>
    )
}

export default SingleWork
