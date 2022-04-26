import React from 'react'
import { images } from '../../constants'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
    <div className='app__testimonials'>
        <h1>Our Testimonials</h1>
        <img src={images.guest01} alt='a happy guest' />
        <p>Exceptional customer service and finger licking dishes! </p> <br/>

        <img src={images.guest02} alt='a guest' />
        <p>You have to try their Afang soup, simply breath taking. </p>    
    </div>
    </>
  )
}

export default Testimonials