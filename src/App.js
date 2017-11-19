import React, { Component } from 'react';
import './App.css';
import Top from './Top.js';
import Texto1 from './Texto1.js';
import VistaFotos from './VistaFotos.js';
import Texto2 from './Texto2'
import CardView from './CardView'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Top />
      	<Texto1 />
      	<VistaFotos />
      	<Texto2 />
        <CardView />
      </div>
    );
  }
}

export default App;
