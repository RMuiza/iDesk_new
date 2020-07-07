import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './style.scss';
import { Login } from './Components/login/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Login />
      </div>
    );
  }
}

export default App;
