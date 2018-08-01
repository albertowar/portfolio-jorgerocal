import React, { Component } from 'react';
import '../styles/Introduction.css';

class Introduction extends Component {
  render() {
    return (
      <div className='IntroductionContainer'>
        <div className='IntroductionImage' />
        <div id='intro' className='Introduction' >
          <hr className='IntroductionHr' />
          <h1>JORGE RODRÍGUEZ CALDADO</h1>
          <h2>Estudiante de Grado de Arquitectura</h2>
          <h2>Técnico Superior en Proyectos de Edificación</h2>
          <hr className='IntroductionHr' />
        </div>
      </div>
    );
  }
}

export default Introduction;
