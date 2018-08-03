import React, { Component } from 'react';
import SectionHeader from './SectionHeader';

import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id='contact' className='SectionContainer'>
        <SectionHeader name='Contacto' />
      </div>
    );
  }
}

export default Contact;
