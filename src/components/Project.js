import React, { Component } from 'react';

import '../styles/Project.css';

class Project extends Component {
  render() {
    return (
      <div className='ProjectContainer'>
        <h4>{this.props.title}</h4>
        <div className='ProjectImageContainer'>
          <img src={this.props.top} className='ProjectImage' />
          <img src={this.props.bottom} className='ProjectImage' />
        </div>
      </div>
    );
  }
}

export default Project;
