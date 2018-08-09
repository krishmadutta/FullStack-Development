import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductList extends React.Component {
  constructor(){
    super();
    fetch("products.json")
    .then(response => response.json())
    .then(json => {this.setState({products:json})})
    .catch(error => console.log(error));
  }
  render() {
    let products = [
      {name:'Traditional Merlot', description:'A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavor profile.' },
      {name: 'Classic Chianti',description:'A medium-bodied wine characterized by a marvelous freshness with a lingering, fruity finish'},
      {name: 'Chardonnay', description:'A dry full-bodied white wine with spicy, bourbon-y notes in an elegant bottle'}
    ]
    let productComponents = [];
    for (let product of products){
      productComponents.push(<Product item={product} />)
    }
    return (
    <ul>
      {productComponents}
    </ul>
  );
  }
}

export default ProductList;
