import React, { Component } from 'react';
import M from 'materialize-css';
import './sidenav.css';
import { CoronaIcon } from 'assets';

class Sidenav extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var sideNav: any = document.querySelectorAll('.sidenav');
      var Collapsible = document.querySelectorAll('.collapsible');
      M.Sidenav.init(sideNav, {
        edge: 'left',
        draggable: true,
      });
      M.Collapsible.init(Collapsible, {});
    });
  }
  render() {
    return (
      <ul id='slide-out' className='sidenav sidenav-fixed'>
        <li className='covidIcon'>
          <img src={CoronaIcon} alt='Corona Web Icon' />
        </li>
        <ul className='collapsible list-container '>
          <li>
            <div className='collapsible-header'>
              <div className='innerText'>
                <i className='material-icons'>data_usage</i>Data
              </div>
              <i className='material-icons'>arrow_drop_down</i>
            </div>
            <div className='collapsible-body'>
              <p>Global Data and Analytics</p>
              <p>Indian Data and Analytics</p>
            </div>
          </li>
          <li>
            <div className='collapsible-header'>
              <div className='innerText'>
                <i className='material-icons'>chrome_reader_mode</i>News
              </div>
            </div>
          </li>
          <li>
            <div className='collapsible-header'>
              <div className='innerText'>
                <i className='material-icons'>airline_seat_recline_normal</i>
                Precaution
              </div>
            </div>
          </li>
        </ul>
        <li className='contactDetails'>
          <p>In emergency</p>
          <p>Helpline Number?</p>
          <div className='callText'>
            <i className='material-icons'>call</i>104 or +91-11-23978046
          </div>
        </li>
      </ul>
    );
  }
}

export default Sidenav;
