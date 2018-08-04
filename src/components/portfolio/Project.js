import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className='ProjectContainer'>
          <div className='ProjectImageContainer' onClick={() => this.setState({ isOpen: true })}>
            <img src={this.props.images[0]} className='ProjectImage' alt={`${this.props.title} 1`} />
          </div>
        </div>

        {isOpen && (
            <Lightbox
              mainSrc={this.props.images[photoIndex]}
              nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
              prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.props.images.length,
                })
              }
            />
          )}
      </div>
    );
  }
}

export default Project;
