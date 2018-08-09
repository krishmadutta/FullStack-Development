import React, {Component} from 'react';

class Product extends Component{
render(){
    console.log(this.props)
  return (
    <li>
      <h3>{this.props.item.name}</h3>
      <p>{this.props.item.description}
      </p>
    </li>
  )
}
}

export default Product;
