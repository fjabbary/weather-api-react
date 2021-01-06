import React, { Component } from 'react';
import './style/ResultNow.css'

class Result extends Component {

    roundTemp = temp => Math.round(temp)


    render() {

        const { cw } = this.props;
        console.log(cw)

        return (
            <div className="result">
                <h2 className="text-success">Result for {cw.name}</h2>
                <div><h3>Temperature: {this.roundTemp(cw.main.temp - 273.15)}&#8451;
                </h3> <img src={`http://openweathermap.org/img/wn/${cw.weather[0].icon}.png`} alt="" /> </div><br />
                <div className="bottom">
                    <div>
                        <p><b>Real Feel</b></p>
                        <p>{this.roundTemp(cw.main.feels_like - 273.15)}&#8451;</p>
                    </div>
                    <div>
                        <p><b>Humidity</b></p>
                        <p>{cw.main.humidity}%</p>
                    </div>
                    <div>
                        <p><b>Weather condition</b></p>
                        <p>{cw.weather[0].description}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Result;
