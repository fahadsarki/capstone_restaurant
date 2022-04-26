import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Testimonials from '../Testimonials/Testimonials'

import './Home.css'

const Home = () => {
  return (
   <>
   <div className='app__home'>
       <div className=''>
        <h1>For The Best Meals</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam laudantium natus repudiandae quibusdam eaque obcaecati quos vel dicta aperiam quia impedit eligendi placeat earum harum vitae enim consequuntur, qui veritatis.</p>
       </div>
       <About/>
       <Testimonials/>
       <Contact/>
   </div>
   </>
  )
}

export default Home