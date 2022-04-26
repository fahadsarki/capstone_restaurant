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
   <div>
       <ul>
           <li>
           <img src={images.eba} alt='eba' />
           <p>Eba <span> : N1500</span> </p>
           </li>
           <li>
           <img src={images.egusi2} alt='egusi' />
           <p>Egusi <span> : N1500</span> </p>  
           </li>
           <li>
           <img src={images.image1} alt='food' />
           <p>Eba <span> : N1500</span> </p> 
           </li>
           <li>
           <img src={images.image2} alt='food_item' />
           <p>Eba <span> : N1500</span> </p>
           </li>
           <li>
           <img src={images.jollof1} alt='jollof_rice' />
           <p>Eba <span> : N1500</span> </p>
           </li>
           <li>
           <img src={images.jollof2} alt='jollof' />
           <p>Eba <span> : N1500</span> </p>
           </li>
           <li>
           <img src={images.poundo} alt='poundo' />
           <p>Eba <span> : N1500</span> </p>
           </li>
           <li>
           <img src={images.pasta} alt='pasta' />
           <p>Eba <span> : N1500</span> </p>
           </li>
           <li>
           <img src={images.riceplantain} alt='rice_plantain' />
           <p>Eba <span> : N1500</span> </p>
           </li>
       </ul>
   </div>
   </div>
    </div>
   
   
   </>
  )
}

export default Products