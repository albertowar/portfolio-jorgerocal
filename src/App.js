import React, { Component } from 'react';

import BrandingBar from './components/navigation/BrandingBar';
import Footer from './components/footer/Footer';
import Introduction from './components/introduction/Introduction';
import AboutMe from './components/about_me/AboutMe';
import MyInterestList from './components/interests/MyInterestList';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <BrandingBar />
        <div className='InfoContainer'>
          <Introduction />
          <AboutMe />
          <MyInterestList />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
