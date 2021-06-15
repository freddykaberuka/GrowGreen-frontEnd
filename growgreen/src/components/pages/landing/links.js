import React from 'react'
import './slide.css'
function Links() {
    return (
        <div>
            <div className="col-md-12 navbar">
				<a href="index.html" class="logo navbar-brand text-white offset-md-2">Logo</a>
				<ul className="nav">
					<li className="nav-item active"><a href="#" class="nav-link">Home</a></li>
					<li className="nav-item"><a href="#" class="nav-link">About Us</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
				</ul>
			</div>
        </div>
    )
}

export default Links
