import React, { Component } from 'react';

import BrandingBar from './components/BrandingBar';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import MyInterestList from './components/MyInterestList';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';

import './styles/App.css';

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
