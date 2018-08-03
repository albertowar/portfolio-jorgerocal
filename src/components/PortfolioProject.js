import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import '../styles/Project.css';

class PortfolioProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const images = [
      this.props.top,
      this.props.bottom
    ];

    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className='ProjectContainer'>
          <h4 className='ProjectTitle Title'>{this.props.title}</h4>
          <div className='ProjectImageContainer' onClick={() => this.setState({ isOpen: true })}>
            <img src={this.props.top} className='ProjectImage' alt={`${this.props.title} 1`} />
            <img src={this.props.bottom} className='ProjectImage' alt={`${this.props.title} 2`} />
          </div>
        </div>

        {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
      </div>
    );
  }
}

export default PortfolioProject;
