import React from 'react'
import './slide.css'

function Sliders() {
    return (
        <div>
            <div className="container-fluid">
		    <div className="row">
			<div className="col-md-12 navbar">
				<a href="index.html" class="logo navbar-brand text-white offset-md-2">Logo</a>
				<ul className="nav">
					<li className="nav-item active"><a href="#" class="nav-link">Home</a></li>
					<li className="nav-item"><a href="#" class="nav-link">About Us</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
					<li className="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
				</ul>
			</div>

			{/* slider banner	  */}

			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			    	<div className="info">
			      		<h1>WELCOME TO GROW GREEN RWANDA</h1>
			      		<div className="d-flex justify-center">
                              <div className="readmore btn btn-success">readmore</div>
                              <div className="contactus btn btn-success">Contact Us</div>
                            </div>
			      	</div>
			    </div>
			    <div className="carousel-item">
			    	<div className="info">
			      		<h1>SLIDE TWO</h1>
			      		<div className="d-flex justify-center">
                              <div className="readmore btn btn-success">readmore</div>
                              <div className="contactus btn btn-success">Contact Us</div>
                            </div>
			      	</div>
			    </div>
			    <div className="carousel-item">
			    	<div className="info">
			      		<h1>SLIDE THREE</h1>
			      		<div className="d-flex justify-center">
                              <div className="readmore btn btn-success">readmore</div>
                              <div className="contactus btn btn-success">Contact Us</div>
                            </div>
			      	</div>
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
		</div>
	</div>

        </div>
    )
}

export default Sliders
