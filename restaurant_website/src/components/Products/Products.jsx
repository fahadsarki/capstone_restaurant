import React from 'react'
import { images } from '../../constants';
import './Products.css'
const Products = () => {
  

  return (
    <>
    <div className='app__products'>
    <div className=''>
   <h1>Menu</h1>
   <h2>Our Nigerian Cuisines</h2>
   {images.map((image) => (
     <ul>
       <li>
         <img src={image.name} alt={image.foodName} />
         <p>{image.id}</p>
         <p>{image.foodName} <span> amount: {image.foodPrice} </span>  </p>
         
       </li>
     </ul>
   ))}
   </div>
    </div>
   
   
   </>
  )
}

export default Products;