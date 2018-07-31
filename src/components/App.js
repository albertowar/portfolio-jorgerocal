import React, { Component } from 'react';
import BrandingBar from './BrandingBar';
import Footer from './Footer';
import Introduction from './Introduction';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <BrandingBar />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='InfoContainer'>
          <Introduction />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
