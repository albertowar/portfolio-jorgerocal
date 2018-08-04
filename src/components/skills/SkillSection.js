import React, { Component } from 'react';
import './SkillSection.css';

import Skill from './Skill';
import SectionHeader from '../util/SectionHeader';

import AutoCADImage from '../../resources/skills/AutoCAD.png';
import IllustratorImage from '../../resources/skills/Illustrator.svg';
import MuseImage from '../../resources/skills/Muse.png';
import PhotoshopImage from '../../resources/skills/Photoshop.png';
import CE3xImage from '../../resources/skills/CE3x.png';

import RevitImage from '../../resources/skills/Revit.png';
import RhinocerosImage from '../../resources/skills/Rhinoceros.png';
import SketchUpImage from '../../resources/skills/SketchUp.png';
import PrestoImage from '../../resources/skills/Presto.png';

class SkillSection extends Component {
  render() {
    return (
      <div id='skills' className='SectionContainer'>
        <SectionHeader name='Habilidades' />
        <div className='Row SkillRow'>
          <div id='SkillColumnLeft' className='Column SkillColumn'>
            <Skill image={AutoCADImage} name='AutoCAD' percentage={85} color='#AD2324' />
            <Skill image={IllustratorImage} name='Illustrator' percentage={5} color='#FF7F18' />
            <Skill image={MuseImage} name='Muse' percentage={40} color='#D2F22F' />
            <Skill image={PhotoshopImage} name='Photoshop' percentage={10} color='#3BBFF0' />
            <Skill image={CE3xImage} name='CE3x' percentage={50} color='rainbow' />
          </div>
          <div id='SkillColumnRight' className='Column SkillColumn'>
            <Skill image={RevitImage} name='Revit' percentage={5} color='#3374BA' />
            <Skill image={RhinocerosImage} name='Rhinoceros' percentage={5} color='#000000' />
            <Skill image={SketchUpImage} name='SketchUp' percentage={70} color='#E92930' />
            <Skill image={PrestoImage} name='PrestoImage' percentage={30} color='#172983' />
          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;
