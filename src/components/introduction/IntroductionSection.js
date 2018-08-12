import React, { Component } from 'react';

import BackgroundImage from '../../resources/background.jpg';

import './IntroductionSection.css';

class IntroductionSection extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImageStyle: {
        objectFit: 'cover',
        position: 'relative',
        width: '100%',
        height: '100%',
        visibility: 'hidden'
      }
    };
  }

  onBackgroundImageLoad() {
    const newBackgroundImageStyle = Object.assign({}, this.state.backgroundImageStyle);
    newBackgroundImageStyle.visibility = 'visible';
    this.setState({ backgroundImageStyle: newBackgroundImageStyle });
  }

  render() {
    return (
      <div id='intro' className='SectionContainer IntroductionContainer'>
        <div className='BackgroundImageContainer'>
          <img src={BackgroundImage} style={this.state.backgroundImageStyle} onLoad={this.onBackgroundImageLoad.bind(this)} alt='background' />
        </div>
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
