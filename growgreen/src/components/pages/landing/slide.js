import React from 'react'
import bg1 from '../../../assets/images/ggr-background1.jpg'
import bg2 from '../../../assets/images/cultivate.jpg'
function slides() {
    return (
        <div>
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={bg1} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Slider One Item</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="backgound-seeding.webp" alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Slider One Item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg2} alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Slider One Item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
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

            <div className="link-area">
                <a href="https://www.youtube.com/channel/UCki4IDK86E6_pDtptmsslow" target="_blank">Click for More</a>
            </div>
        </div>
    )
}

export default slides
