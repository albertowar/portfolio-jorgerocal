import React, { Component } from 'react';
import SectionHeader from '../util/SectionHeader';
import ProfileImage from '../../resources/profile.jpg';
import './AboutMeSection.css';

class AboutMeSection extends Component {
  render() {
    return (
      <div id='about' className='SectionContainer GreyBackground'>
        <SectionHeader name='Sobre mí' />
        <div className='AboutMe'>
          <div>
            ¡Hola!
            <br /><br />
            Soy Jorge y, desde pequeño, estoy muy interesado la Arquitectura y cómo se diseñaban los edificios.
            Cuando entré en la Escuela Técnica Superior de Arquitectura de Málaga, empecé a tener contacto con el Urbanismo,
            y hoy día me parece una disciplina fundamental en el desarrollo de las ciudades.
            Creo firmemente que, tanto la Arquitectura como el Urbanismo, deben estar basadas en la eficiencia energética, el diseño bioclimático para el desarrollo de las personas
            y el cuidado de la naturaleza.
          </div>
          <img src={ProfileImage} className='ProfileImage' alt='Me' />
        </div>
      </div>
    );
  }
}

export default AboutMeSection;
