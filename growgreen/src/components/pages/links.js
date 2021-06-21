import React from 'react'
import { Links } from 'react-router-dom'
function Link() {
    return (
        <div>
           <div className="col-md-12 navbar">
				<a href="index.html" class="logo navbar-brand text-white offset-md-2">GrowGreen</a>
				<ul className="nav">
				<nav>
        <Link to="/">Home</Link>
        <Link to="/article">Blogs</Link>
        <Link to="/about">Abouts</Link>
      </nav> 
					<li className="nav-item active"><a href="#" class="nav-link">Home</a></li>
					<li className="nav-item"><a href="#" class="nav-link">About Us</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Blogs</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Gallery</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
				</ul>
			</div> 
        </div>
    )
}

export default Link
