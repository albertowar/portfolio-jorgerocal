import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialButton extends React.Component {
  render() {
    const iconStyle = {
      color: 'black',
      margin: '5px 5px 5px 5px',
      borderRadius: '50%',
      border: '3px solid #000000',
      padding: this.props.padding ? this.props.padding : '10px 10px 10px 10px'
    };

    const icon = this.props.prefix ? [this.props.prefix, this.props.icon] : this.props.icon;

    return (
      <div className='SocialButtonContainer'>
        <a href={this.props.link}>
          <FontAwesomeIcon icon={icon} size={this.props.size ? this.props.size : '1x'} style={ iconStyle } />
        </a>
      </div>
    );
  }
};

export default SocialButton;