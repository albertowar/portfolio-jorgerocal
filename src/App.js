import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import BrandingBar from './desktop/components/BrandingBar';
import Footer from './desktop/components/Footer';
import Introduction from './desktop/components/Introduction';
import AboutMe from './desktop/components/AboutMe';
import MyInterestList from './desktop/components/MyInterestList';
import ProjectList from './desktop/components/ProjectList';
import Contact from './desktop/components/Contact';

import './desktop/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <MediaQuery minDeviceWidth={1200}>
            <BrandingBar />
            <div className='InfoContainer'>
              <Introduction />
              <AboutMe />
              <MyInterestList />
              <ProjectList />
              <Contact />
            </div>
            <Footer />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
