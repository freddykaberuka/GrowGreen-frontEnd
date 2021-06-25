import React from 'react'
import { NavLink } from 'react-router-dom'
function Links() {
    return (
        <div>
           <div className="col-md-10 navbar">
				<ul className="nav">
					<li className="nav-item active"><NavLink to="/" class="nav-link" exact={true}>Home</NavLink></li>
					<li className="nav-item px-4"><NavLink to="/about" class="nav-link">About Us</NavLink></li>
					<li className="nav-item px-4"><NavLink to="/article" class="nav-link">Blogs</NavLink></li>
					<li className="nav-item px-4"><NavLink to="/gallery" class="nav-link">Gallery</NavLink></li>
					<li className="nav-item px-4"><NavLink to="/contact" class="nav-link">Contact Us</NavLink></li>
				</ul>
			</div> 
        </div>
    )
}

export default Links
