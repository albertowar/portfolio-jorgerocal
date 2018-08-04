import React, { Component } from 'react';

import './IntroductionSection.css';

class IntroductionSection extends Component {

  render() {
    return (
      <div id='intro' className='SectionContainer'>
        <div className='Introduction'>
          <hr className='IntroductionHr' />
          <p id='Name'>JORGE RODRÍGUEZ CALDADO</p>
          <p id='Currently'>Estudiante de Grado de Arquitectura</p>
          <p id='Past'>Técnico Superior en Proyectos de Edificación</p>
          <hr className='IntroductionHr' />
        </div>
      </div>
    );
  }
}

export default IntroductionSection;
