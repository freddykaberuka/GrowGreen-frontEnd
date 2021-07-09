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

function SingleMission() {
    return (
        <div>
            <Header/>
            <div className='all-content flex'>
            <div className='pages mb-6 pb-16'>
                <p className='link-purpose mt-16 pt-6'><small><i><Link to='/'>Home </Link>/<Link to='/about'>About Us </Link>/<Link to='/mission' style={{textDecoration:'none', color:'red'}}>Vision</Link></i></small></p>
            <h1 className='head-purpose mt-4'>Our Vision</h1>
            <p style={{fontSize:'26px'}}>Famer are the Answers</p>
            <div className='single-content'>
            <div className='imageValue'>
                <img src={image1}/>
            </div>
            <small className='image-detail'><i>Grow green Rwanda client Freddy receives the seed and fertilizer he purchased on credit.</i></small>
            <div className='mt-4'>
                <p>When farmers improve their harvests, they pull themselves out of poverty. They also start producing surplus food for their neighbors. When farmers prosper, they eradicate poverty and hunger in their communities.</p>
                <p>Grow Green Rwanda is growing quickly and we are proud to soon represent Africa’s largest network of smallholder farmers. Today, we are privileged to serve over 1 million farm families - with more than 5 million people living in those families.  And the farmers we serve will produce enough surplus food to feed another 5 million of their neighbors.</p>
                <p>This is only the tip of the iceberg. When millions of farmers speak with one voice, we can more effectively pursue collaboration together with government and the private sector to broaden our reach.</p>
            </div>

</div>
</div>
<div className='aside-links mt-20 pt-6'>
    <Aside/>
<SubscribeForm/>
</div>
</div>
<Footer1/>
<Footer/>
        </div>
    )
}

export default SingleMission
