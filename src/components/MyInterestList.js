import React, { Component } from 'react';
import SectionHeader from './SectionHeader';

import '../styles/MyInterestList.css';

class MyInterestList extends Component {
  render() {
    return (
      <div id='interest' className='MyInterestListContainer'>
        <SectionHeader name='Mis intereses' />
      </div>
    );
  }
}

export default MyInterestList;
