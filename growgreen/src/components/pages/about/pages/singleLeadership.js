import React from 'react'
import './singlePages.css'
import image2 from '../../../../assets/images/image3.jpg'
import Header from '../../../header/header'
import Footer1 from '../../footer1/footer1'
import Footer from '../../footer/footer'
import SubscribeForm from '../../blog/subscribeForm'
import Aside from './aside'
import leader1 from '../../../../assets/images/Diane.jpeg'
import { Link } from 'react-router-dom'

function SingleLeadership() {
    return (
        <div>
            <Header/>
            <div className='all-content flex'>
            <div className='pages mb-6 pb-16'>
                <p className='link-purpose mt-16 pt-6'><small><i><Link to='/'>Home </Link>/<Link to='/about'>About Us </Link>/<Link to='/leadership' style={{textDecoration:'none', color:'red'}}>Leadership</Link></i></small></p>
            <h1 className='head-purpose mt-4'>Leadership</h1>
            <div className='single-content'>
           <div className='mt-4'>
                <p>At GrowGreen Rwanda, we are a family of leaders who put Farmers First. To guide our work, we use a decentralized leadership structure that keeps our decision-making as close to our clients as possible. Our global Leadership Council aligns on organization-wide strategic goals and vision. Our country directors and steering committees lead our country-level strategy and growth. 
                    And our senior field leaders oversee our service delivery to more than 1 million farm families.</p>
                    <h2 className='pt-3'>Founding Story</h2>
                <p>Tumutoneshe Dianne started GrowGreen Rwanda in 2020  in Rwanda and . The organization was inspired by two farmers in Kenya working similar plots of land. The differences were small: 
                    one planted in rows, while the other broadcasted seed. One could afford higher quality farm products. 
                    Yet one farmer harvested four times as much food as the other. Providing access to better farm products and education on farming techniques became the driving mission behind GrowGreen Rwanda. 
                </p>
                <h2>Our Team</h2>
                <div className='team flex justify-center pt-4'>
                
                <div className="flip-card pr-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={leader1} alt="Avatar" style={{width:"300px", height:"300px"}}/>
                            <h8>Diane Tumutoneshe</h8> 
                                <p>Founder & President</p> 
                        </div>
                        <div className="flip-card-back">
                            <h1>Diane Tumutoneshe</h1> 
                                <p>Founder & President</p> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a nulla eu est blandit</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card pr-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={leader1} alt="Avatar" style={{width:"300px", height:"300px"}}/>
                            <h8>Diane Tumutoneshe</h8> 
                                <p>Founder & President</p> 
                        </div>
                        <div className="flip-card-back">
                            <h1>Diane Tumutoneshe</h1> 
                                <p>Founder & President</p> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a nulla eu est blandit</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card pr-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={leader1} alt="Avatar" style={{width:"300px", height:"300px"}}/>
                            <h8>Diane Tumutoneshe</h8> 
                                <p>Founder & President</p> 
                        </div>
                        <div className="flip-card-back">
                            <h1>Diane Tumutoneshe</h1> 
                                <p>Founder & President</p> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a nulla eu est blandit</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

</div>
</div>
<div className='aside-links w-100 mt-20 pt-6'>
    <Aside/>
<SubscribeForm/>
</div>
</div>
<Footer1/>
<Footer/>
        </div>
    )
}

export default SingleLeadership
