import React, { Component } from 'react';
import { getDateAndTIme } from 'functions';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { SideNav } from 'components';
import { HomeScreen } from 'screens';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <nav className='nabvBar'>
          <a href='#' data-target='slide-out' className='sidenav-trigger'>
            <i className='material-icons black-text'>menu</i>
          </a>
          <div className='headingContainer'>
            <p className='heading-text'>Dashboard Pemantauan COVID-19</p>
            <p className='date-text hide-on-med-and-down'>
              Last Update {getDateAndTIme()}
            </p>
          </div>
        </nav>
        <SideNav />
        <HomeScreen />
      </div>
    );
  }
}

export default App;
