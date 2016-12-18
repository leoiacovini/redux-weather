import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(w => w.main.temp);
    const press = cityData.list.map(w => w.main.pressure );
    const hums = cityData.list.map(w => w.main.humidity);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={name}>
        <td><Map lat={lat} lon={lon} /></td>
        <td><Chart color="red" data={temps} unit="K" /></td>
        <td><Chart color="blue" data={press} unit="hPa" /></td>
        <td><Chart color="grey" data={hums} unit="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity  (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
