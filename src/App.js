import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './Top.js';
import Texto1 from './Texto1.js';
import Fotos from './Fotos.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Texto1 />
        <Fotos />
      </div>
    );
  }
}

export default App;
