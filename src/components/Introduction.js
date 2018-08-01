import React, { Component } from 'react';
import '../styles/Introduction.css';
import Background from '../resources/background.jpg'

class Introduction extends Component {
  render() {
    return (
      <div id='intro' className='IntroductionContainer' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
        <hr className='IntroductionHr' />
        <h1>JORGE RODRÍGUEZ CALDADO</h1>
        <h2>Estudiante de Grado de Arquitectura</h2>
        <h2>Técnico Superior en Proyectos de Edificación</h2>
        <hr className='IntroductionHr' />
      </div>
    );
  }
}

export default Introduction;
