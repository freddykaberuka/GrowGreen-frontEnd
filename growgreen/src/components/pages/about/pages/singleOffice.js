import React from 'react'
import './singlePages.css'
import image2 from '../../../../assets/images/image3.jpg'
import Header from '../../../header/header'
import Footer1 from '../../footer1/footer1'
import Footer from '../../footer/footer'
import SubscribeForm from '../../blog/subscribeForm'
import Aside from './aside'
import image1 from '../../../../assets/images/planting.jpeg'

function SingleOffice() {
    return (
        <div>
            <Header/>
            <div className='all-content flex'>
            <div className='pages mb-6 pb-16'>
                <p className='link-purpose mt-16 pt-6'><small><i>Home /About Us /offices</i></small></p>
            <h1 className='head-purpose mt-4'>Our Office</h1>
            <div className='single-content'>
            <div className='imageValue'>
                <img src={image1}/>
            </div>
            <small className='image-detail'><i>Grow green Rwanda client Freddy receives the seed and fertilizer he purchased on credit.</i></small>
            <div className='mt-4'>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean finibus diam enim, nec vulputate dolor commodo nec. Donec vestibulum molestie enim id convallis. In eu sodales purus. Fusce ac molestie felis, vel mollis nibh. Sed et tincidunt mauris, quis porta nisi. Etiam est orci, malesuada in consequat in, commodo eu lectus. Nullam lobortis faucibus neque id lacinia. Morbi tincidunt fringilla nulla, non tristique nunc tempus vitae. Nam eget hendrerit massa. Mauris vestibulum velit urna, eget feugiat lacus pulvinar eu. In iaculis laoreet sapien, ultricies imperdiet felis convallis ac. Nunc eget diam at lacus rutrum sagittis. 
                    Morbi bibendum orci nec sagittis vestibulum. Sed non ex sit amet ligula tempus efficitur. Mauris id leo neque.</p>
                <p>Aenean vitae augue auctor, dictum ante et, euismod enim. Cras varius fringilla ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Phasellus vel quam tristique quam condimentum aliquam. Sed semper sem sit amet diam euismod feugiat. 
                    Sed mauris neque, congue et lorem eu</p>
                    <p><strong>Map in the Bottom</strong></p>
                
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

export default SingleOffice
