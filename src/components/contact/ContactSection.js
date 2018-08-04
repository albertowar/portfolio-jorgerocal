import React, { Component } from 'react';
import SectionHeader from '../util/SectionHeader';

import './ContactSection.css';

class ContactSection extends Component {
  render() {
    return (
      <div id='contact' className='SectionContainer GreyBackground'>
        <SectionHeader name='Contacto' />
      </div>
    );
  }
}

export default ContactSection;
