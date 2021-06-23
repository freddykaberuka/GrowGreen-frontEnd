import React from 'react'
import Header from '../../header/header'
import Footer from '../footer/footer'
import Links from '../links'
import './contact.css'
function Contact() {
    return (
        <div>
            <Header/>
            {/* <Links/> */}
            <div className='contact pl-14'>
                <h2>Get in Touch</h2>
            <form className="col-sm-6 mt-5">
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Names"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                </div>
                 
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="message...."></textarea>
                </div>
                <div className="form-group">
                <button type="button" class="btn btn-primary float-left">Send Message</button>
                </div>
            </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
