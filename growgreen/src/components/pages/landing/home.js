import React from 'react'
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
     
           <br/><br/>
        </div>
    )
}

export default Home
