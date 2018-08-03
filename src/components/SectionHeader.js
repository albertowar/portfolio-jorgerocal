import React, { Component } from 'react';
import '../styles/SectionHeader.css';

class SectionHeader extends Component {
  render() {
    return (
      <div className='SectionHeaderContainer Title'>
        { this.props.name }
      </div>
    );
  }
}

export default SectionHeader;