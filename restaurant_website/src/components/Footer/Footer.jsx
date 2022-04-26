import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='app__footer'>
        <FaFacebookF/> <span>  <FaTwitter/> </span> < FaInstagram/>
            <p>copyright @ 2022</p>
        </div>
    </>
  )
}

export default Footer