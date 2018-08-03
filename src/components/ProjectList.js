import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import Project from './Project';

import '../styles/ProjectList.css';

import LagunillasImage1 from '../resources/lagunillas_1.jpg';
import LagunillasImage2 from '../resources/lagunillas_2.jpg';
import LagunillasHouseImage1 from '../resources/lagunillas_house_1.jpg';
import LagunillasHouseImage2 from '../resources/lagunillas_house_2.jpg';
import CiremImage1 from '../resources/cirem_1.jpg';
import CiremImage2 from '../resources/cirem_2.jpg';

class ProjectList extends Component {
  render() {
    return (
      <div id='projects' className='EvenSectionContainer'>
        <SectionHeader name='Proyectos' />
        <div className='Projects'>
          <Project title='BARRIO DE LAGUNILLAS' top={LagunillasImage1} bottom={LagunillasImage2} />
          <Project title='REHABILITACIÓN EN LAGUNILLAS' top={LagunillasHouseImage1} bottom={LagunillasHouseImage2} />
          <Project title='C.I.R.E.M. LA ARAÑA' top={CiremImage1} bottom={CiremImage2} />
        </div>
      </div>
    );
  }
}

export default ProjectList;
