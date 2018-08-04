import React, { Component } from 'react';

import BrandingBar from './components/navigation/BrandingBar';
import Footer from './components/footer/Footer';
import IntroductionSection from './components/introduction/IntroductionSection';
import AboutMeSection from './components/about_me/AboutMeSection';
import InterestSection from './components/interests/InterestSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import SkillSection from './components/skills/SkillSection';
import ContactSection from './components/contact/ContactSection';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <BrandingBar />
        <div className='InfoContainer'>
          <IntroductionSection />
          <AboutMeSection />
          <InterestSection />
          <PortfolioSection />
          <SkillSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
