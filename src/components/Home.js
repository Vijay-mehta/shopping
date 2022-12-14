import React from 'react'
import {CartState} from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';

import "./styles.css"

const Home = () => {

 const {state:{products}} =CartState();

 console.log(products)
  return (
    <div className='home'>
      {<Filters/>}
   <div className='productContainer'>
{products.map((prod)=>{
  // console.log(prod,"123")
  return <SingleProduct prod={prod} key={prod.id}/>
})}

   </div>
    </div>
  )
}

export default Home
