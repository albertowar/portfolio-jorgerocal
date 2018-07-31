import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/SocialButton.css';

class SocialButton extends React.Component {
  render() {
    const iconStyle = {
      color: 'black',
      margin: '5px 5px 5px 5px',
      borderRadius: '50%',
      border: '3px solid #000000',
      padding: this.props.padding ? this.props.padding : '10px 10px 10px 10px'
    };

    return (
      <div className='SocialButtonContainer'>
        <a href={this.props.link}>
          <FontAwesomeIcon icon={['fab', this.props.icon]} size='2x' style={ iconStyle } />
        </a>
      </div>
    );
  }
};

export default SocialButton;