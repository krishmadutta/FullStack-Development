import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import ShoppingCart from './ShoppingCart';
import Temp from './Temp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Krishma</h1>
        </header>
        <Catalog/>
        <ShoppingCart/>
      {/*<Temp/>*/}

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
