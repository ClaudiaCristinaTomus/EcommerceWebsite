import React from 'react'
import products from '../data';
import './Main.css';
import ProductCard from './ProductCard';

const Main = () => {
  return (
    <div className=''>
        {products.map((product)=>(<ProductCard key={product.id} product={product}/>))}
    </div>
  )
}

export default Main;