import React from 'react'
import './contact.css'
function Contacts() {
    return (
        <div className='contact'>
            {/* <div className="col-6"> */}
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
        // </div>
    )
}

export default Contacts;
