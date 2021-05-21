import React from 'react'
import './subscribe.css'

function Subscribe() {
    return (
        <div class='subscribe'>
            <h1 className='text-center mt-3 pt-4'>Subscribe To Our Newsletters</h1>
            <form className="form-inline justify-content-center align-items-center">
                
                <div className="form-group mx-sm-3 mb-2 w-50">
                <input type="email" className="form-control w-100" id="email" placeholder="email@gmail.com"/>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Enter Your Email</button>
            </form>
        </div>
    )
}
export default Subscribe
