import React from 'react'
import { NavLink } from 'react-router-dom'
function Links() {
    return (
        <div>
           <div className="col-md-12 navbar">
				<a href="index.html" class="logo navbar-brand text-white offset-md-2">GrowGreen</a>
				<ul className="nav">
					<li className="nav-item active"><NavLink to="/" class="nav-link" exact={true}>Home</NavLink></li>
					<li className="nav-item"><NavLink to="/" class="nav-link">About Us</NavLink></li>
					<li className="nav-item"><NavLink to="/" class="nav-link">Blogs</NavLink></li>
					<li className="nav-item"><NavLink to="/" class="nav-link">Gallery</NavLink></li>
					<li className="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
				</ul>
			</div> 
        </div>
    )
}

export default Links
