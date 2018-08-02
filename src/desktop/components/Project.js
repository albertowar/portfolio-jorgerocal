import React, { Component } from 'react';

import '../styles/Project.css';

class Project extends Component {
  render() {
    return (
      <div className='ProjectContainer'>
        <h4 className='ProjectTitle'>{this.props.title}</h4>
        <div className='ProjectImageContainer'>
          <img src={this.props.top} className='ProjectImage' alt={`${this.props.title} 1`} />
          <img src={this.props.bottom} className='ProjectImage' alt={`${this.props.title} 2`} />
        </div>
      </div>
    );
  }
}

export default Project;
