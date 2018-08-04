import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component {
  render() {
    let skillStyle = {
      width: `${this.props.percentage}%`
    };

    if (this.props.color === 'rainbow') {
      skillStyle.background = 'linear-gradient(to right, #ED7E62, #4CA761, #3A5BA2, #843C92)';
    } else {
      skillStyle.backgroundColor = this.props.color
    }

    return (
      <div className='SkillContainer'>
        <img className='SkillImage' src={this.props.image} alt={this.props.name} />
        <div className='SkillWrapper'>
          <div className='Skill' style={skillStyle}>
            {`${this.props.percentage}%`}
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
