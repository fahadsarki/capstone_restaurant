import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <ul className='app__navbar-links'>
            <li><Link to='./'>Home</Link></li>

            {['about', 'products', 'contact'].map((item)=>(
                <li className='app__flex p-text' key={`link-${item}`} >
                    <Link to={`/${item}`}> {item} </Link>
                </li>
            ))}

        </ul>
    </>
  )
}

export default Navbar