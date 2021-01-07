import React, { Component } from 'react';
import './App.css';
import ForecastResult from './components/ForecastResult';
import Form from './components/Form';
import ResultNow from './components/ResultNow'

class App extends Component {

  state = {
    cw: '',
    forecastData: ''
  }

  currentWeather = (cw) => {
    this.setState({ cw })
  }

  weatherForecast = (forecastData) => {
    this.setState({ forecastData })
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <Form currentWeather={this.currentWeather} dailyForecast={this.dailyForecast} weatherForecast={this.weatherForecast} />
          {this.state.cw ? <ResultNow cw={this.state.cw} /> : null}
          {this.state.forecastData ? <ForecastResult forecastData={this.state.forecastData} /> : null}
        </div>
      </div>
    );
  }

}

export default App;
