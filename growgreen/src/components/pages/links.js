import React from 'react'
import { NavLink } from 'react-router-dom'

function Links() {
    return (
        <div>
			<nav class="col-md-12 navbar navbar-expand-md navbar-dark">
  				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    				<span class="navbar-toggler-icon"></span>
  				</button>
  				<div class="collapse navbar-collapse mx0" id="collapsibleNavbar">
  					<ul className="navbar-nav nav">
						<li className="nav-item active pl-3 pr-3 ml-0"><NavLink to="/" class="nav-link" exact={true}>Home</NavLink></li>
						<li className="nav-item px-4 pl-6"><NavLink to="/about" class="nav-link">About Us</NavLink></li>
						<li className="nav-item px-4 pl-6"><NavLink to="/article" class="nav-link">Blogs</NavLink></li>
						<li className="nav-item px-4 pl-6"><NavLink to="/photo" class="nav-link">Gallery</NavLink></li>
						<li className="nav-item px-4 pl-6"><NavLink to="/contact" class="nav-link">Contact Us</NavLink></li>
						<li className="nav-item px-2 pl-6"><NavLink to="/contact" class="nav-link">Donate</NavLink></li>
					</ul>
  				</div>  
			</nav>
        </div>
    )
}

export default Links
