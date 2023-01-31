import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className='productCard_wrapper'>
        <div className='left'>
            <img className='productCard_img' src={product.image} alt=''/>
            <img className='productCard_imgSmall' src={product.image2} alt=''/>
            <img className='productCard_imgSmall' src={product.image3} alt=''/>
            <img className='productCard_imgSmall' src={product.image4} alt=''/>
            <img className='productCard_imgSmall' src={product.image5} alt=''/>
        </div>
        
        <div className='right'>
            <p className='rightElement'>{product.name}</p>
            <h3 className='rightElement'>{product.description}</h3>
            <p className='rightElement'>{product.paragraph}</p>
            <div className='price'>
            <p>{product.price}</p>
            <p>{product.reducer}</p>
            </div>
            <p className='rightElement'>{product.oldprice}</p>
            <button className='ProductCard_button'>Add to chart</button>
        </div>

    </div>
  );
};

export default ProductCard;