import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Logo from './Logo';
import NavigationBar from './NavigationBar';
import MobileNavigationBar from './MobileNavigationBar';
import '../styles/BrandingBar.css';

class BrandingBar extends Component {
  render() {
    return (
      <div className='StickyBrandingBarContainer'>
        <div className='BrandingBarContainer'>
          <div className='BrandingBar'>
            <Logo />
            <MediaQuery query="(min-width: 1200px)">
              <NavigationBar />
            </MediaQuery>
            <MediaQuery query="(max-width: 1199px)">
              <MobileNavigationBar />
            </MediaQuery>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default BrandingBar;
