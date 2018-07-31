import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Logo from './Logo';
import SocialNetworks from './SocialNetworks';
import '../styles/BrandingBar.css';

class BrandingBar extends Component {
  render() {
    return (
      <div className='BrandingBarContainer'>
        <div className='BrandingBar'>
          <Logo />
          <MediaQuery query="(min-width: 800px)">
            <SocialNetworks />
          </MediaQuery>
        </div>
        <hr />
      </div>
    );
  }
}

export default BrandingBar;
