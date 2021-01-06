import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import ResultNow from './components/ResultNow'

class App extends Component {

  state = {
    cw: '',
    df: ''
  }

  currentWeather = (cw) => {
    this.setState({ cw })
  }

  dailyForecast = (df) => {
    // console.log(df)
    console.log('df')
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Form currentWeather={this.currentWeather} dailyForecast={this.dailyForecast} />
          {this.state.cw ? <ResultNow cw={this.state.cw} /> : null}
        </div>
      </div>
    );
  }

}

export default App;
