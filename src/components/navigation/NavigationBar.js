import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Scrollchor from 'react-scrollchor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavigationBar.css';

class DesktopNavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  navigation(mobile) {
    return (
      <nav className={mobile ? 'MobileNavigationBar' : ''}>
        <Scrollchor to="intro" className="NavigationLink" beforeAnimate={() => mobile ? this.setState({ visible: false }) : {}}>HOME</Scrollchor>
        <Scrollchor to="about" className="NavigationLink" beforeAnimate={() => mobile ? this.setState({ visible: false }) : {}}>SOBRE MÍ</Scrollchor>
        <Scrollchor to="interest" className="NavigationLink" beforeAnimate={() => mobile ? this.setState({ visible: false }) : {}}>INTERESES</Scrollchor>
        <Scrollchor to="projects" className="NavigationLink" beforeAnimate={() => mobile ? this.setState({ visible: false }) : {}}>PORTFOLIO</Scrollchor>
        <Scrollchor to="skills" className="NavigationLink" beforeAnimate={() => mobile ? this.setState({ visible: false }) : {}}>HABILIDADES</Scrollchor>
      </nav>
    );
  }

  render() {
    return (
      <div className='NavigationBarContainer'>
        <MediaQuery query="(min-width: 1200px)">
          {
            this.navigation(false)
          }
        </MediaQuery>
        <MediaQuery query="(max-width: 1199px)">
          {
            !this.state.visible && <FontAwesomeIcon icon={['fa', 'bars']} size='2x' onClick={() => this.setState({ visible: true })} />
          }
          {
            this.state.visible &&
            this.navigation(true)
          }
        </MediaQuery>
      </div>
    );
  }
}

export default DesktopNavigationBar;
