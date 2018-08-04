import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import SectionHeader from '../util/SectionHeader';
import Interest from './Interest';

import './InterestSection.css';

import ArquitectureImage from '../../resources/interests/Arquitecture.svg';
import UrbanismImage from '../../resources/interests/urbanism.svg';
import EnvironmentImage from '../../resources/interests/Environment.svg';
import EnergyImage from '../../resources/interests/energy.svg';

import PhotoImage from '../../resources/interests/Photo.svg';
import SoftwareImage from '../../resources/interests/software.svg';
import ARImage from '../../resources/interests/AR.svg';
import Printing3DImage from '../../resources/interests/3D.svg';

class InterestSection extends Component {
  render() {
    return (
      <div id='interest' className='SectionContainer InterestSectionContainer'>
        <SectionHeader name='Intereses' />
        <MediaQuery query="(min-width: 1200px)">
          <div className='Row'>
            <Interest image={ArquitectureImage} title='ARQUITECTURA' description='La Arquitectura y el diseño son esenciales para el desarrollo personal y humano' />
            <Interest image={UrbanismImage} title='URBANISMO' description='Como disciplina para el crecimiento sostenible de las ciudades' />
            <Interest image={EnvironmentImage} title='MEDIO AMBIENTE' description='El cuidado y la relación con la naturaleza mediante el uso de materiales reciclados o con poca huella ecológica' />
            <Interest image={EnergyImage} title='RENOVABLES' description='Las energías renovables deberían ser la primera en alimentar viviendas e industria, y que éstos sean energéticamente eficientes' />
          </div>
          <div className='Row'>
            <Interest image={PhotoImage} title='FOTOGRAFÍA' description='La mejor manera de analizar el medio que me rodea y una forma de inspiración muy efectiva' />
            <Interest image={SoftwareImage} title='PROGRAMAS' description='A menudo me intereso por programas que me ayuden a hacer mis diseño más atractivos y eficientes' />
            <Interest image={ARImage} title='AR' description='Una herramienta extremadamente útil a la hora de diseñar y analizar proyectos' />
            <Interest image={Printing3DImage} title='IMPRESIÓN 3D' description='La impresión 3D es una revolución tanto para maquetación, como para la construcción y veo necesaria su integración en futuros proyectos' />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1199px)">
          <div className='Column InterestColumn'>
            <Interest image={ArquitectureImage} title='ARQUITECTURA' description='La Arquitectura y el diseño son esenciales para el desarrollo personal y humano' />
            <Interest image={UrbanismImage} title='URBANISMO' description='Como disciplina para el crecimiento sostenible de las ciudades' />
            <Interest image={EnvironmentImage} title='MEDIO AMBIENTE' description='El cuidado y la relación con la naturaleza mediante el uso de materiales reciclados o con poca huella ecológica' />
            <Interest image={EnergyImage} title='RENOVABLES' description='Las energías renovables deberían ser la primera en alimentar viviendas e industria, y que éstos sean energéticamente eficientes' />
            <Interest image={PhotoImage} title='FOTOGRAFÍA' description='La mejor manera de analizar el medio que me rodea y una forma de inspiración muy efectiva' />
            <Interest image={SoftwareImage} title='PROGRAMAS' description='A menudo me intereso por programas que me ayuden a hacer mis diseño más atractivos y eficientes' />
            <Interest image={ARImage} title='AR' description='Una herramienta extremadamente útil a la hora de diseñar y analizar proyectos' />
            <Interest image={Printing3DImage} title='IMPRESIÓN 3D' description='La impresión 3D es una revolución tanto para maquetación, como para la construcción y veo necesaria su integración en futuros proyectos' />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default InterestSection;
