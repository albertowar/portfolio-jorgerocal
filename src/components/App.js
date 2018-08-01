import React, { Component } from 'react';

import BrandingBar from './BrandingBar';
import Footer from './Footer';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import MyInterestList from './MyInterestList';
import Projects from './Projects';
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
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
