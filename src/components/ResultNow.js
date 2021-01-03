import React, { Component } from 'react';
import './style/ResultNow.css'

class Result extends Component {

    render() {

        const { cw } = this.props;
        console.log(cw)

        return (
            <div className="bg-light result">
                <h5>{cw[0].city_name}</h5>
                <div>Temperature: {cw[0].temp}&#8451; <img alt="" src={`https://www.weatherbit.io/static/img/icons/${cw[0].weather.icon}.png`} /></div>
                <div className="bottom">
                    <div>
                        <p><b>Real Feel</b></p>
                        <p>{cw[0].app_temp}&#8451;</p>
                    </div>
                    <div>
                        <p><b>Wind speed</b></p>
                        <p>{cw[0].wind_spd} m/s</p>
                    </div>
                    <div>
                        <p><b>Weather condition</b></p>
                        <p>{cw[0].weather.description}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Result;
