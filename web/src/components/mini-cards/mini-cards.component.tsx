import React, { Component } from 'react';
import './mini-card.css';

interface IProps {
  type: string;
  numberOfCases: number;
  todaysDifference: any;
}

class MiniCards extends Component<IProps> {
  render() {
    const { type, numberOfCases, todaysDifference } = this.props;
    let iconBGColor;
    if (type === 'Infected') {
      iconBGColor = 'rgba(255,0,0,0.3)';
    } else if (type === 'Recovered') {
      iconBGColor = 'rgba(0,0,255,0.3)';
    } else {
      iconBGColor = 'rgba(0,255,0,0.3)';
    }
    return (
      <div className='mini-card'>
        <div className='mini-card-header'>
          <i
            className='material-icons'
            style={{ backgroundColor: iconBGColor }}
          >
            arrow_drop_down
          </i>
          <p> {type} </p>
        </div>
        <div className='mini-card-body'>
          <p>{numberOfCases}</p>
        </div>
        <div className='divider'></div>
        <div className='mini-card-footer'>
          <p>{todaysDifference}</p>
        </div>
      </div>
    );
  }
}

export default MiniCards;
