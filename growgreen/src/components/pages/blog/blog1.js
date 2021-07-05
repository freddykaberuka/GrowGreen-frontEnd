import React from 'react'
import image2 from '../../../assets/images/image3.jpg'
import SubscribeForm from './subscribeForm'
import './form.css'
import Header from '../../header/header'
import Footer from '../footer/footer'
import Footer1 from '../footer1/footer1'
import Lates from '../landing/latestBlog/lates'
function Blogging() {
    return (
        <div>
        <Header/>
        <div className='allPage ml-10 '>
            <div className='mt-20'>
                <p>August 26,2020 </p>
            </div>
            <div>
                <h2>Build a Simple React Application Using Hooks</h2>
            </div>
            <div className='blogs flex w-100'>
            <div className='w-100 justify-content-center'>
                <p>If you have been developing React applications, then you probably know that there are two ways of creating 
                    React components. You can create a component class that extends from React.Component. You then have to implement 
                    specific methods such as render() that renders the component. The alternative is to create a functional component. 
                    This type of component is simply a JavaScript function that returns a rendered element.

                    Functional components are much shorter, they contain less boilerplate code, and everything is contained in one 
                    function. Until recently, there was another big difference between class components and functional components. 
                    Functional components could not contain any state. These stateless components are lightweight, and they encourage 
                    separating the presentation from the application logic.</p>

                <p>Then React introduced Hooks. Hooks allow you to obtain data and a callback function that can modify the data. 
                   This allows you to add state to functional components, making them much more powerful. In this way, you can 
                   create complete stateful React components using the terse functional style.

                    In this tutorial, I will be showing you how to create a simple React application using Hooks to add state 
                    to a functional component. The application is a simple search form for books by their title and uses the 
                    Open Library API to obtain real book data.
                    </p>
                    <div className=''><img src={image2}/></div>
                    <p>Then React introduced Hooks. Hooks allow you to obtain data and a callback function that can modify the data. 
                   This allows you to add state to functional components, making them much more powerful. In this way, you can 
                   create complete stateful React components using the terse functional style.

                    In this tutorial, I will be showing you how to create a simple React application using Hooks to add state 
                    to a functional component. The application is a simple search form for books by their title and uses the 
                    Open Library API to obtain real book data.
                    </p>

            </div>
            <div className='w-75'>
                <SubscribeForm/>
            </div>
            </div>
        </div>
        <div className='latest pb-4 pt-3'>
            <h5 className='ml-10'>YOU MIGHT ALSO LIKE:</h5>
        <Lates/>
        </div>
        <Footer1/>
        <Footer/>
        </div>
    )
}

export default Blogging
