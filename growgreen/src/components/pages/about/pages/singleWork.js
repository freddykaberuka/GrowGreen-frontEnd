import React from 'react'
import './singlePages.css'
import image2 from '../../../../assets/images/image3.jpg'
import Header from '../../../header/header'
import Footer1 from '../../footer1/footer1'
import Footer from '../../footer/footer'
import SubscribeForm from '../../blog/subscribeForm'
import Aside from './aside'
import image1 from '../../../../assets/images/planting.jpeg'
import { Link } from 'react-router-dom'

function SingleWork() {
    return (
        <div>
            <Header/>
            <div className='all-content flex'>
            <div className='pages mb-6 pb-16'>
                
            <h1 className='head-purpose mt-16 pt-10'>Work With Us</h1>
            <p style={{fontSize:'26px'}}>We serve smallholder farmers. In everything we do, we place Farmers First.</p>
            <div className='single-content'>
            <div className='imageValue'>
                <img src={image1}/>
            </div>
            <small className='image-detail'><i>Grow green Rwanda client Freddy receives the seed and fertilizer he purchased on credit.</i></small>
            <div className='mt-4'>
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
            dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat odio, fringilla non commodo at,
            venenatis a augue. Curabitur laoreet quis metus sed convallis. Duis sit amet purus a lacus vulputate facilisis. 
            Phasellus vel elit malesuada, finibus odio in, elementum urna.</p>
             <div className='imageValue'>
                <img src={image1}/>
            </div>
            <small className='image-detail'><i>Grow green Rwanda client Freddy receives the seed and fertilizer he purchased on credit.</i></small>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lectus semper,
            commodo turpis nec, dictum sapien. Maecenas viverra risus eu lectus bibendum, sit amet ornare mi maximus.
            Quisque sed dui a tortor imperdiet viverra a nec libero. Integer at magna a augue venenatis vestibulum nec</p>
            <p>quis ex. Quisque tristique volutpat sapien at vestibulum. Pellentesque at ligula arcu. 
            Nam quis nulla ut libero blandit aliquet non at augue. Nullam suscipit viverra est, quis 
            bibendum tellus venenatis eu. Integer eget neque justo.</p>
            </div>
            

</div>
</div>
<div className='aside-links mt-20 pt-20'>
<SubscribeForm/>
</div>
</div>
<Footer1/>
<Footer/>
        </div>
    )
}

export default SingleWork
