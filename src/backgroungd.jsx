import React, { Component } from 'react';
import bg from './painted-ladies-3.jpg';
import './App.css';

class Background extends Component {
  render() {
    return (
      <div className="App">
          <img src={bg} alt="painted" />
      </div>
    );
  }
}

export default Background;
