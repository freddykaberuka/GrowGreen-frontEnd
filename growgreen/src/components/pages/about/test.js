import React from 'react'
import './test.css'
import image1 from '../../../assets/images/planting.jpeg'
import image2 from '../../../assets/images/image3.jpg'

function Test() {
    return (
        <div>
            <div className="container-fluid contenedor text-center">
                <div className=" container text-center flex">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                        <div className="ver_mas text-center">
                            <span  className="lnr">Find out more</span>
                        </div>
                        <article className="text-left">
                            <h2>Purpose and Value</h2>
                            <h4>We measure success in our ability to make more famers more prospers </h4>
                        </article>
                        <img src={image1} alt=""/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                        <div className="ver_mas text-center">
                            <span id="click" class="lnr">Find out More</span>
                        </div>
                        <article className="text-left">
                            <h2>Our Vision</h2>
                            <h4>in GrowGreen Rwanda Farmer are the Answer</h4>
                        </article>
                        <img src={image2} alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                            <div className="ver_mas text-center">
                                <span className="lnr">Find out More</span>
                            </div>
                            <article className="text-left">
                                <h2>Leadership</h2>
                                <h4>GrowGreen Rwanda approach to leadership</h4>
                            </article>
                            <img src={image1} alt=""/>
                        </div>
                        
                    </div>
                    <div className=" container text-center flex">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                            <div className="ver_mas text-center">
                                <span className="lnr">Find out More</span>
                            </div>
                            <article className="text-left">
                                <h2>Leadership</h2>
                                <h4>GrowGreen Rwanda approach to leadership</h4>
                            </article>
                            <img src={image1} alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10 col-xs-8 container_foto">
                            <div className="ver_mas text-center">
                                <span className="lnr">Find out More</span>
                            </div>
                            <article className="text-left">
                                <h2>Leadership</h2>
                                <h4>GrowGreen Rwanda approach to leadership</h4>
                            </article>
                            <img src={image1} alt=""/>
                        </div>
                        </div>
                </div>
        </div>
    )
}

export default Test
