import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/MobileNavigationBar.css';

class MobileNavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <div className='MobileNavigationBarContainer'>
        {
          !this.state.visible && <FontAwesomeIcon icon={['fa', 'bars']} size='2x' onClick={() => this.setState({ visible: true })} />
        }
        {
          this.state.visible &&
          <div className='MobileNavigationBar'>
            <Scrollchor to="intro" className="MobileNavigationLink" beforeAnimate={() => this.setState({ visible: false })}>HOME</Scrollchor>
            <Scrollchor to="about" className="MobileNavigationLink" beforeAnimate={() => this.setState({ visible: false })}>SOBRE MÍ</Scrollchor>
            <Scrollchor to="interest" className="MobileNavigationLink" beforeAnimate={() => this.setState({ visible: false })}>MIS INTERESES</Scrollchor>
            <Scrollchor to="projects" className="MobileNavigationLink" beforeAnimate={() => this.setState({ visible: false })}>PORTFOLIO</Scrollchor>
            <Scrollchor to="contact" className="MobileNavigationLink" beforeAnimate={() => this.setState({ visible: false })}>CONTACTO</Scrollchor>
          </div>
        }
      </div>
    );
  }
}

export default MobileNavigationBar;
