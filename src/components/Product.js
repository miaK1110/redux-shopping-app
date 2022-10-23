import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

import './Product.css';
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch(cartActions.addToCart);
  // if we directly add a product from the product item component it would be wrong
  // bc if we only send the data to the backend and it doesn't have any logic,
  // and reducer functions will be no use then
  // bc if we send any single product 2 times into the backend
  // then the backend dosen't know that this product is already being part of the cart
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className='card'>
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
