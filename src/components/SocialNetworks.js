import React, { Component } from 'react';
import SocialButton from './SocialButton';

import '../styles/SocialNetworks.css';

class SocialNetworks extends Component {
  render() {
    return (
      <div className='SocialNetworksContainer'>
        <SocialButton icon='facebook-f' link='https://www.facebook.com/alberto.war' padding='10px 13px 10px 13px' />
        <SocialButton icon='instagram' link='https://www.instagram.com/alb_erc/' />
        <SocialButton icon='twitter' link='https://twitter.com/Alb_Erc' padding='10px 9px 10px 9px' />
        <SocialButton icon='pinterest-p' link='https://www.pinterest.ie/alb_erc/' padding='10px 11px 10px 11px' />
        <SocialButton icon='youtube' link='https://www.youtube.com/channel/UCwV_0HmQkRrTcrReaMxPeDw' padding='10px 8px 10px 8px' />
        <SocialButton icon='linkedin-in' link='https://www.linkedin.com/in/albertowar/' />
      </div>
    );
  }
}

export default SocialNetworks;
