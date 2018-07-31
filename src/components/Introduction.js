import React, { Component } from 'react';
import '../styles/Introduction.css';
import Background from '../resources/background.jpg'

class Introduction extends Component {
  render() {
    return (
      <div className='IntroductionContainer' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
        <h1>JORGE RODRIGUEZ CALDADO</h1>
      </div>
    );
  }
}

export default Introduction;
