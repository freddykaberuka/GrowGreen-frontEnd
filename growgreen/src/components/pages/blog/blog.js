import React from 'react'
import Header from '../../header/header'
import Footer from '../footer/footer'
import Footer1 from '../footer1/footer1'
import Subscribe from '../footer1/subscribe/subscribe'
import Sliders from '../landing/sliders'
import Links from '../links'
import Article from './article'

import './blog.css'
function Blog() {
    return (
        <div>
            <Sliders/>
            <Article/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Blog
