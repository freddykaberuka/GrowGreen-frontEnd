import React from 'react'
import './form.css'
function SubscribeForm() {
    return (
        <div className='subform col-sm-8 ml-8 pb-3'>
            <form>
                <p><strong>Subscribe to our Newsletter</strong></p>
                <h7>Sign up to receive updates on our work and the farmers we support!</h7>
                
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FirstName"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="LastName"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I agree to receive regular email updates from One Acre Fund. 
                    We will never give your information to other organizations. 
                    Please read our Privacy Policy for more.</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default SubscribeForm
