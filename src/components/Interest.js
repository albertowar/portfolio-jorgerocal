import React, { Component } from 'react';

import '../styles/Interest.css';

class Interest extends Component {
  render() {
    return (
      <div className='InterestContainer'>
        <img src={this.props.image} alt={this.props.title} className='InterestImage' />
        <h4 className='InterestTitle Title'>{this.props.title}</h4>
        <p className='InterestDescription Text'>{this.props.description}</p>
      </div>
    );
  }
}

export default Interest;
