import React from 'react'
import { images } from '../../constants';
import './Products.css'
const Products = () => {
  

  return (
   <>
    <div className='app__products'>
    <h1>Menu</h1>
   <h2>Our Nigerian Cuisines</h2>
    <div className='card'>
      {images.map((image) => (
     <div className='card-box'>
       <div className='card-box-image'>
        <img src={image.name} alt={image.foodName} />
       </div>
       <p>{image.foodName} <span> amount: {image.foodPrice} </span>  </p>
     <div className='btn'>
     <button>add to cart</button>
     </div>
     </div>
   ))}
    </div>
    </div>
   </>
  )
}

export default Products;