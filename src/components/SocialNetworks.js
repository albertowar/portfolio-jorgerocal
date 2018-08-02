import React, { Component } from 'react';
import SocialButton from './SocialButton';

import '../styles/SocialNetworks.css';

class SocialNetworks extends Component {
  render() {
    return (
      <div className='SocialNetworksContainer'>
        <SocialButton icon='facebook-f' link='https://www.facebook.com/rocaljorge/' padding='10px 13px 10px 13px' />
        <SocialButton icon='instagram' link='https://www.instagram.com/rocaljorge' />
        <SocialButton icon='twitter' link='https://twitter.com/jorgerocal1' padding='10px 9px 10px 9px' />
        <SocialButton icon='pinterest-p' link='https://www.pinterest.es/JorgeROCAL/' padding='10px 11px 10px 11px' />
        <SocialButton icon='youtube' link='https://www.youtube.com/channel/UCB8RuoEJHrVMsXDJ1Jr0CBA' padding='10px 8px 10px 8px' />
        <SocialButton icon='linkedin-in' link='https://www.linkedin.com/in/jorge-rodr%C3%ADguez-caldado-55219462/' />
      </div>
    );
  }
}

export default SocialNetworks;
