import React, { Component } from 'react';
import BrandingBar from './BrandingBar';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrandingBar />
        <hr />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
