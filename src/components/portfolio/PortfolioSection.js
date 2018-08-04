import React, { Component } from 'react';
import SectionHeader from '../util/SectionHeader';
import Project from './Project';

import './PortfolioSection.css';

import LagunillasImage1 from '../../resources/portfolio/lagunillas_1.jpg';
import LagunillasImage2 from '../../resources/portfolio/lagunillas_2.jpg';
import LagunillasHouseImage1 from '../../resources/portfolio/lagunillas_house_1.jpg';
import LagunillasHouseImage2 from '../../resources/portfolio/lagunillas_house_2.jpg';
import CiremImage1 from '../../resources/portfolio/cirem_1.jpg';
import CiremImage2 from '../../resources/portfolio/cirem_2.jpg';

class PortfolioSection extends Component {
  render() {
    return (
      <div id='projects' className='SectionContainer GreyBackground'>
        <SectionHeader name='Portfolio' />
        <div className='Projects'>
          <Project title='BARRIO DE LAGUNILLAS' images={[LagunillasImage1, LagunillasImage2]} />
          <Project title='REHABILITACIÓN EN LAGUNILLAS' images={[LagunillasHouseImage1, LagunillasHouseImage2]} />
          <Project title='C.I.R.E.M. LA ARAÑA' images={[CiremImage1, CiremImage2]} />
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
