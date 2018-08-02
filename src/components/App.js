import React, { Component } from 'react';

import BrandingBar from './BrandingBar';
import Footer from './Footer';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import MyInterestList from './MyInterestList';
import ProjectList from './ProjectList';
import Contact from './Contact';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <BrandingBar />
        <div className='InfoContainer'>
            <Introduction />
            <AboutMe />
            <MyInterestList />
            <ProjectList />
            <Contact />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
