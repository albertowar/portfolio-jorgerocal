import React, { Component } from 'react';
import SocialButton from './SocialButton';

import './SocialNetworks.css';

class SocialNetworks extends Component {
  render() {
    return (
      <div className='SocialNetworksContainer'>
        <SocialButton prefix='fab' icon='facebook-f' link='https://www.facebook.com/rocaljorge/' padding='10px 13px 10px 13px' />
        <SocialButton prefix='fab' icon='instagram' link='https://www.instagram.com/rocaljorge' />
        <SocialButton prefix='fab' icon='twitter' link='https://twitter.com/jorgerocal1' padding='10px 9px 10px 9px' />
        <SocialButton prefix='fab' icon='pinterest-p' link='https://www.pinterest.es/JorgeROCAL/' padding='10px 11px 10px 11px' />
        <SocialButton prefix='fab' icon='youtube' link='https://www.youtube.com/channel/UCB8RuoEJHrVMsXDJ1Jr0CBA' padding='10px 8px 10px 8px' />
        <SocialButton prefix='fab' icon='linkedin-in' link='https://www.linkedin.com/in/jorge-rodr%C3%ADguez-caldado-55219462/' />
        <SocialButton icon='envelope' link='mailto:webmaster@example.com' />
      </div>
    );
  }
}

export default SocialNetworks;
