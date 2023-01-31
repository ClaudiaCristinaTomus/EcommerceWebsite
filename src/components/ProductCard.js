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
            <p>{product.name}</p>
            <h3>{product.description}</h3>
            <p>{product.paragraph}</p>
            <p>{product.price}</p>
            <p>{product.reducer}</p>
            <p>{product.oldprice}</p>
            <button className='ProductCard_button'>Add to chart</button>
        </div>

    </div>
  );
};

export default ProductCard;