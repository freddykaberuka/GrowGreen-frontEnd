import React from 'react'
import './subscribe.css'

function Subscribe() {
    return (
        <div class='subscribe mt-3 '>
            <h1 className='text-center mt-3 pt-4 heading'>Subscribe To Our Newsletters</h1>
            <form className="form-inline justify-content-center align-items-center">
                <div className="form-group w-100 d-flex justify-content-center sub-content">
                <div className="form-group mx-sm-3 mb-2 w-50">
                <input type="email" className="form-control w-100" id="email" placeholder="email@gmail.com"/>
                </div>
                <div className="">
                <button type="submit" class="btn btn-primary mb-2">Enter Your Email</button>
                </div>
                </div>
            </form>
        </div>
    ) 
}
export default Subscribe
