import React from 'react'
import Photo from '../gallery/admin-gallery'
import AddPhoto from '../gallery/addPhoto';
import './dashboard.css'


function Dashboard() {
    return (
        <div>
            <div className="wrapper">
    <div className="sidebar">
        <h2>GrowGreen Rwanda</h2>
        <ul>
            <li><a href="#"><i className="fa fa-dashboard"></i>Dashboard</a></li>
            <li><a href="#"><i className="fa fa-user"></i>Users</a></li>
            <li><a href="#"><i className="fa fa-briefcase"></i>About Us</a></li>
            <li><a href="#"><i className="fa fa-rss"></i>Blogs</a></li>
            <li><a href="#"><i className="fa fa-picture-o"></i>Gallery</a></li>
            <li><a href="#"><i className="fa fa-envelope"></i>Messages</a></li>
            <li><a href="#"><i className="fa fa-thumb-tack"></i>Subscription</a></li>
            <li><a href="#"><i className="fa fa-sign-out"></i>Logout</a></li>
        </ul>
        <div className="social_media"> <a href="#"><i className="fa fa-facebook-f"></i></a> 
        <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-instagram"></i></a> </div>
    </div>
    <div className="main_content">
        
        <div className="info">
            <Photo/>
            <AddPhoto/>
        </div>
    </div>
</div>
        </div>
    )
}

export default Dashboard
