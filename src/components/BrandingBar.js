import React, { Component } from 'react';

import Logo from './Logo';
import NavigationBar from './NavigationBar';
import '../styles/BrandingBar.css';

class BrandingBar extends Component {
  render() {
    return (
      <div className='StickyBrandingBarContainer'>
        <div className='BrandingBarContainer'>
          <div className='BrandingBar'>
            <Logo />
            <NavigationBar />
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default BrandingBar;
