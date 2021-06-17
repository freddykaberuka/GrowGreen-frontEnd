import React from 'react'
import Footer from '../footer/footer'
import Footer1 from '../footer1/footer1'
import Subscribe from '../footer1/subscribe/subscribe'
import Links from '../links'
import Article from './article'

import './blog.css'
function Blog() {
    return (
        <div>
            <Links/>
            <Article/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Blog
