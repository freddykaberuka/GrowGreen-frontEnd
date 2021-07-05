import React from 'react'
import { Link, NavLink } from 'react-router-dom'

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
						<li className="nav-item px-4 pl-3"><NavLink to="/about" class="nav-link nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</NavLink>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          					<Link to="#" className="dropdown-item">Action</Link>
          					<Link to="#" className="dropdown-item">Another action</Link>
          					<Link to="#" className="dropdown-item">Something else here</Link>
        				</div>
						</li>
						<li className="nav-item px-4 pl-3"><NavLink to="/article" class="nav-link">Blogs</NavLink></li>
						<li className="nav-item px-4 pl-3"><NavLink to="/photo" class="nav-link">Gallery</NavLink></li>
						<li className="nav-item px- pl-3"><NavLink to="/contact" class="nav-link">Contact Us</NavLink></li>
						<li className="nav-item px-2 pl-3"><NavLink to="/contact" class="nav-link">Donate</NavLink></li>
					</ul>
  				</div>  
			</nav>
        </div>
    )
}

export default Links
