import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div>
            
            <footer className="mainfooter copy pt-3" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                            {/* <!--Column1 */}
                                <div className="footer-pad">
                                    <h4>What We Do</h4>
                                    <ul class="list-unstyled">
                                        <li><a href="#"></a></li>
                                        <li><a href="#">Farmers First</a></li>
                                        <li><a href="#">Our Model</a></li>
                                        <li><a href="#">How we Grow</a></li>
                                        <li><a href="#">Insights and Data Library</a></li>
    
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/* <!--Column1--> */}
                                <div className="footer-pad">
                                    <h4>Who We Are</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Our Impact</a></li>
                                        <li><a href="#">Press and Awards</a></li>
                                        <li><a href="#">Board and Advisors</a></li>
                                        <li><a href="#">Reports</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/* <!--Column1--> */}
                                <div className="footer-pad">
                                    <h4>Careers</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Why Work Here</a></li>
                                        <li><a href="#">Careers FAQ</a></li>
                                        <li><a href="#">Careers Blog</a></li>
                                        <li><a href="#">Job Openings</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
    	                    <div className="col-md-3">
    		                    <h4>Follow Us</h4>
                                    <ul className="social-network social-circle">
                                        <li><a href="#" class="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#" class="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>				
		                    </div>
                        </div>
	                    <div className="row">
		                    <div className="col-md-12 copy">
			                    <p className="text-center">&copy; Copyright 2021 - GrowGreen Rwanda.  All rights reserved.</p>
		                    </div>
	                    </div>

                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
