import React from 'react'
import image2 from '../../../assets/images/image3.jpg'

function Slidess() {
    return (
        <div>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="col-md-3" style={{float:'left'}}>
                        <div className="card mb-2">
                            <img className="card-img-top" src={image2} alt="Card image cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Purpose and Value</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3" style={{float:'left'}}>
                        <div className="card mb-2">
                            <img className="card-img-top" src={image2} alt="Card image cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Our Mission</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3" style={{float:'left'}}>
                        <div className="card mb-2">
                            <img className="card-img-top" src={image2} alt="Card image cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Leadership</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Slidess