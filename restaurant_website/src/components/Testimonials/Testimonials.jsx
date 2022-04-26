import React from 'react'
import { guests } from '../../constants'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
    <div className='app__testimonials'>
        <h1>Our Testimonials</h1>
        {guests.map((item) => (
          <div>
          <img src={item.name} alt='guest'/>
          <p>{item.guestName}</p>
          <p>{item.guestTestimonial}</p>
          </div>
          
        ))}
    </div>
    </>
  )
}

export default Testimonials