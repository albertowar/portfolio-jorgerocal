import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import Interest from './Interest';

import '../styles/MyInterestList.css';

import ArquitectureImage from '../../resources/Arquitecture.svg';
import UrbanismImage from '../../resources/Urbanism.svg';
import EnvironmentImage from '../../resources/Environment.svg';

import PhotoImage from '../../resources/Photo.svg';
import ARImage from '../../resources/AR.svg';
import Printing3DImage from '../../resources/3D.svg';

class MyInterestList extends Component {
  render() {
    return (
      <div id='interest' className='MyInterestListContainer'>
        <SectionHeader name='Mis intereses' />

        <div className='InterestRow'>
          <Interest image={ArquitectureImage} title='ARQUITECTURA' description='La Arquitectura y el diseño son esenciales para el desarrollo personal y humano' />
          <Interest image={UrbanismImage} title='URBANISMO' description='Como disciplina para el crecimiento sostenible de las ciudades' />
          <Interest image={EnvironmentImage} title='MEDIO AMBIENTE' description='El cuidado y la relación con la naturaleza mediante el uso de materiales reciclados o con poca huella ecológica' />
          <Interest image={ArquitectureImage} title='RENOVABLES' description='Las energías renovables deberían ser la primera en alimentar viviendas e industria, y que éstos sean energéticamente eficientes' />
        </div>
        <div className='InterestRow'>
          <Interest image={PhotoImage} title='FOTOGRAFÍA' description='La mejor manera de analizar el medio que me rodea y una forma de inspiración muy efectiva' />
          <Interest image={ArquitectureImage} title='PROGRAMAS' description='A menudo me intereso por programas que me ayuden a hacer mis diseño más atractivos y eficientes' />
          <Interest image={ARImage} title='AR' description='Una herramienta extremadamente útil a la hora de diseñar y analizar proyectos' />
          <Interest image={Printing3DImage} title='IMPRESIÓN 3D' description='La impresión 3D es una revolución tanto para maquetación, como para la construcción y veo necesaria su integración en futuros proyectos' />
        </div>
      </div>
    );
  }
}

export default MyInterestList;
