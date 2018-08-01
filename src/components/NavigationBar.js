import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import '../styles/NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <div className='NavigationBarContainer'>
        <Scrollchor to="intro" className="NavigationLink">HOME</Scrollchor>
        <Scrollchor to="about" className="NavigationLink">SOBRE MÍ</Scrollchor>
        <Scrollchor to="interest" className="NavigationLink">MIS INTERESES</Scrollchor>
        <Scrollchor to="projects" className="NavigationLink">PROYECTOS</Scrollchor>
        <Scrollchor to="contact" className="NavigationLink">CONTACTO</Scrollchor>
      </div>
    );
  }
}

export default NavigationBar;
