import React from 'react'
import Footer from '../footer/footer'
import Footer1 from '../footer1/footer1'
import Subscribe from '../footer1/subscribe/subscribe'
import Ads from './govAd/advertisement'
import Latest from './latestBlog/latest'
import Secondsect from './secondsection/secondsection'
import Sliders from './sliders'

function Home() {
    return (
        <div>
           <Sliders/> 
           <Secondsect/>
           <Ads/>
           <Latest/>
           <Subscribe/>
           <Footer1/>
           <Footer/>
        </div>
    )
}

export default Home
