import React, { Component } from 'react';
import { generateGoogleAPI } from 'functions';
import 'materialize-css/dist/css/materialize.min.css';
import './home-screen.css';
import { MiniCards, Pagination } from 'components';
import { Chart } from 'react-google-charts';
import { stateData as TempObj } from 'data';

class HomeScreen extends Component {
  state = {
    stateNames: [],
    stateData: [],
  };
  componentDidMount() {
    let array1 = [];
    let array2 = [];
    for (let [key, value] of Object.entries(TempObj)) {
      array1.push(key);
      array2.push(value);
    }
    array1 = array1.filter((names) => names !== 'State Unassigned');
    this.setState({
      stateNames: array1,
      stateData: array2,
    });
  }
  render() {
    return (
      <div>
        <div className='miniCard-container'>
          <MiniCards
            type='Infected'
            numberOfCases={11000}
            todaysDifference={`+133 added`}
          />
          <MiniCards
            type='Recovered'
            numberOfCases={9000}
            todaysDifference={`+23 added`}
          />
          <MiniCards
            type='Deaths'
            numberOfCases={150}
            todaysDifference={`+9 added`}
          />
        </div>
        <div className='stat-container'>
          <div className='geoChart-container'>
            <Chart
              chartType='GeoChart'
              className='charts'
              data={[
                ['Country', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700],
              ]}
              mapsApiKey={generateGoogleAPI()}
              rootProps={{ 'data-testid': '1' }}
            />
          </div>
          <div className='stateDetails'>
            <div className='header'>
              <h6 className='heading-text'>Cases per State</h6>
              <Pagination />
            </div>
            {this.state.stateNames.map((name, index) => {
              return <p key={index}> {name} </p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
