import React, {Component} from 'react';
import './ShoppingCart.css';
import CartItemList from './CartItemList';

class ShoppingCart extends Component {
  render() {
    return <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      <CartItemList/>
  </div>;
  }
}

// if not exported then to import you need to use import {CartItemList}
export default ShoppingCart;
