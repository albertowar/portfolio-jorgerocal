import React, { Component } from 'react';

import './Introduction.css';

class Introduction extends Component {

  render() {
    return (
      <div id='intro' className='SectionContainer'>
        <div className='Introduction'>
          <hr className='IntroductionHr' />
          <p className='Title' id='Name'>JORGE RODRÍGUEZ CALDADO</p>
          <p className='Text' id='Currently'>Estudiante de Grado de Arquitectura</p>
          <p className='Text' id='Past'>Técnico Superior en Proyectos de Edificación</p>
          <hr className='IntroductionHr' />
        </div>
      </div>
    );
  }
}

export default Introduction;
