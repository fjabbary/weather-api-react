import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import ResultNow from './components/ResultNow'

class App extends Component {

  state = {
    cw: ''
  }

  currentWeather = (cw) => {
    this.setState({ cw })
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Form currentWeather={this.currentWeather} />
          {this.state.cw ? <ResultNow cw={this.state.cw} /> : null}
        </div>
      </div>
    );
  }

}

export default App;
