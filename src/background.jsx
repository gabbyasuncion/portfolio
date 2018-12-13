import React, { Component } from 'react';
import bg from './painted-ladies-3.jpg';
import aqua from './aqua.ttf'
import './App.css';

class Background extends Component {
  render() {
    return (
      <div className="background-cont">
          <img className="bg" src={bg} alt="painted"/>
          <a href=""><p id="title">Gabriela
          <br />
          Asuncion</p></a>
          <ul id="menu">
            <a href=""><li>About</li></a>
            <br/>
            <a href=""><li>Resume</li></a>
            <br/>
            <a href=""><li>Projects</li></a>
          </ul>
      </div>
    );
  }
}

export default Background;
