import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import MyForm from './MyForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Navbar"><NavBar/></div>
        <div className="MyForm"><MyForm/></div>
      <br></br>
      </div>
    );
  }
}

export default App;
