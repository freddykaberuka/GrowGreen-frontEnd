import React from 'react'
import './footer1.css'
import Social from './social'
function Footer1() {
    return (
        <div>
            <div className='d-flex pt-20 pl-3 footer1'>
                <div className='md-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4499730625826!2d30.10195621474755!3d-1.97426409856069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7035181316b%3A0x879a556138fa41c1!2sMilanova%20Coffee%20Shop!5e0!3m2!1sen!2srw!4v1621588861716!5m2!1sen!2srw" style={{width:600,height:400}} loading="lazy"/>
                </div>
                <div className=''>
                     <Social/>
                </div>
            </div>
        </div>
    )
}

export default Footer1
