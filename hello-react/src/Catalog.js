  //import React from 'react';
  import React, {Component} from 'react';
  import './Catalog.css';
  import ProductList from './ProductList';

    class Catalog extends Component {
      render() {
        let title = 'The Catalog of today ' + new Date().toDateString();

        return (
          <div>
            <h2>{title}</h2>
             <ProductList/>
          {/*This is a comment*/}
        </div>
      );
    }
  }

  export default Catalog;
