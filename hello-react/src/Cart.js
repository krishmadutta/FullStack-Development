import React, { Component } from 'react';
import './Cart.css';
import CartItemList from './CartItemList';

class Cart extends Component{
  constructor(){
    super();
    this.state = {items: []};

    fetch("items.json")
    .then(response => response.json())
    .then(json => {this.setState({cart:json})})
    .catch(error => console.log(error) );

  }
  render() {
    return <div className='cart'>
      <h2>Shopping Cart</h2>
      <CartItemList items={this.state.items} />
    </div>;
  }

}

export default Cart;
