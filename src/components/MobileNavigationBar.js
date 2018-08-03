import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/MoibleNavigationBar.css';

class MoibleNavigationBar extends Component {
  render() {
    return (
      <div className='MoibleNavigationBarContainer'>
        <FontAwesomeIcon icon={['fa', 'bars']} size='2x' />
        <div className='CollapsableMenu'>
          <nav>
            <Scrollchor to="intro" className="NavigationLink">HOME</Scrollchor>
            <Scrollchor to="about" className="NavigationLink">SOBRE MÍ</Scrollchor>
            <Scrollchor to="interest" className="NavigationLink">MIS INTERESES</Scrollchor>
            <Scrollchor to="projects" className="NavigationLink">PROYECTOS</Scrollchor>
            <Scrollchor to="contact" className="NavigationLink">CONTACTO</Scrollchor>
          </nav>
        </div>
      </div>
    );
  }
}

export default MoibleNavigationBar;
