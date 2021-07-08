import React from 'react'
import './singlePages.css'
import image2 from '../../../../assets/images/image3.jpg'
import Header from '../../../header/header'
import Footer1 from '../../footer1/footer1'
import Footer from '../../footer/footer'
import SubscribeForm from '../../blog/subscribeForm'
import Aside from './aside'

function SinglePurpose() {
    return (
        <div>
            <Header/>
            <div className='all-content flex'>
            <div className='pages mb-6 pb-16'>
                <p className='link-purpose mt-16 pt-6'><small><i>Home /About Us /Purpose and Values</i></small></p>
            <h1 className='head-purpose mt-4'>Purpose and Values</h1>
            <div className='single-content'>
            <div className='imageValue'>
                <img src={image2}/>
            </div>
            <small className='image-detail'>Grow green Rwanda client Freddy receives the seed and fertilizer he purchased on credit.</small>
            <p className='mt-4'>We serve smallholder farmers. In everything we do, we place the Farmer First. We measure success in our ability 
                to make more farmers more prosperous. We envision a future in which every farm family has the knowledge and means 
                to achieve big harvests,support healthy families, and cultivate rich soil.</p>
                <p className='mt-3'>These are the core values that drive our work:</p>
                <ul style={{listStyle: 'number'}} className='listing-purpose'>
                    <li>
                       <strong>Humble Service:</strong>We meet farmers in their fields, and we get our shoes muddy. Farmers are our customers, and we serve them with humility.
                    </li>
                    <li>
                       <strong>Hard Work:</strong>We work hard every day. We execute with world-class professionalism and business excellence. Farmers deserve nothing less. 
                    </li>
                    <li>
                       <strong>Continual Growth: </strong>We improve every season. We work with determination to meet our goals and then stretch ourselves by raising the bar even higher.
                    </li>
                    <li>
                      <strong> Dreaming Big: </strong>We bring together the best leaders and build long-term careers. We care for team members like family.
                    </li>
                    <li>
                       <strong>Dreaming Big: </strong>We envision serving millions of farm families. We build for scale with every idea and solution.
                    </li>
                    <li>
                       <strong>Integrity: </strong>We do what we say, and our words match our values.
                    </li>
                </ul>
</div>
</div>
<div className='aside-links w-75 mt-20 pt-6'>
    <Aside/>
<SubscribeForm/>
</div>
</div>
<Footer1/>
<Footer/>
        </div>
    )
}

export default SinglePurpose
